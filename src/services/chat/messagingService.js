import Api from "../../api/AxiosClient.js";

const http = Api();

const validateToken = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("Token payload:", payload);
        if (!payload.sub || !payload.user_type) {
            throw new Error("Invalid token payload");
        }
        if (payload.exp < Math.floor(Date.now() / 1000)) {
            throw new Error("Token expired");
        }
        return payload;
    } catch (error) {
        console.error("Token validation failed:", error);
        return null;
    }
};

const send_message = async (data) => {
    try {
        console.log("Sending message:", data);
        const res = await http.post('/messaging/send-message/', data);
        console.log("Message sent:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error sending message via HTTP:", error);
        throw error;
    }
};

const get_user_info = async () => {
    try {
        const res = await http.get('/user/');
        console.log('get_user_info:', res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};

const create_websocket = async (conversationId, messageHandler) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No authentication token available");
        return null;
    }

    console.log("Creating WebSocket for conversationId:", conversationId);

    const tokenPayload = validateToken(token);
    if (!tokenPayload) {
        console.error("Invalid or expired token");
        return null;
    }

    const userInfo = await get_user_info();
    if (!userInfo?.id || !userInfo?.user_type) {
        console.error("Missing user info");
        return null;
    }

    if (tokenPayload.sub !== userInfo.email || tokenPayload.user_type !== userInfo.user_type) {
        console.error("Token and user info mismatch");
        return null;
    }

    const wsUrl = `ws://127.0.0.1:8000/api/messaging/ws/${conversationId}?token=${encodeURIComponent(token)}`;
    let ws = null;
    let reconnectAttempts = 0;
    const maxReconnectAttempts = 5;

    const connect = async () => {
        try {
            ws = new WebSocket(wsUrl);
            ws.onopen = () => {
                console.log("WebSocket connected for conversationId:", conversationId);
                reconnectAttempts = 0;
                ws.send(JSON.stringify({
                    sender_id: userInfo.id,
                    sender_type: userInfo.user_type,
                }));
            };
            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.event_type === "new_message") {
                        console.log("New message:", data);
                        messageHandler(data);
                    } else if (data.error) {
                        console.error("WebSocket server error:", data.error);
                    }
                } catch (error) {
                    console.error("Message parsing error:", error);
                }
            };
            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
            };
            ws.onclose = (event) => {
                console.log("WebSocket disconnected:", event.code, event.reason);
                if (reconnectAttempts < maxReconnectAttempts) {
                    reconnectAttempts++;
                    setTimeout(connect, 3000);
                }
            };
        } catch (error) {
            console.error("WebSocket creation failed:", error);
        }
    };

    await connect();
    return ws;
};

export default { send_message, get_user_info, create_websocket };