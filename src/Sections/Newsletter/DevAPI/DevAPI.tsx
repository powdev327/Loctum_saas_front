import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DevApiStyleWrapper from "./DevAPI.style";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DevAPI = () => {
  return (
    <DevApiStyleWrapper className="developer-apis-Section mb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
            <div className="developer-apis-left">
              <div className="section-title2">
                <p>Developer APIs</p>
                <h2>Fast setup Easy-to-use APIs</h2>
              </div>
              <div className="developer-apis-text">
                <p>
                  I must explain to you how all this mistaken. Tdea of
                  denouncing pleasure and praising pain was born and I will give
                  you acomplete account create automation scenarios
                </p>
                <a href="#" className="text-link">
                  <span>Read Documentation</span>
                  <GoArrowRight />
                </a>
              </div>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
            <div className="developer-apis-right">
              <Tabs>
                <TabList className="developer-apis-tab-buttons nav nav-tabs">
                  <Tab className="api-tab-btn">Node</Tab>
                  <Tab className="api-tab-btn">Ruby</Tab>
                  <Tab className="api-tab-btn">Java</Tab>
                  <Tab className="api-tab-btn">Python</Tab>
                  <Tab className="api-tab-btn">PHP</Tab>
                </TabList>

                <TabPanel>
                  <div className="developer-apis-notepad">
                    <div className="custom-textarea">
                      <div className="textarea">
                        <span className="variable">var</span>{" "}
                        <span className="string">events</span> ={" "}
                        <span className="class">require</span>{" "}
                        <span className="bracket1">(</span>
                        <span className="string">'events'</span>
                        <span className="bracket1">)</span>; <br />
                        <span className="variable">var</span>{" "}
                        <span className="string">eventEmitter</span> ={" "}
                        <span className="class">new events.</span>
                        <span className="variable">EventEmitter</span>{" "}
                        <span className="bracket1">(</span>
                        <span className="bracket1">)</span>;<br />
                        <span className="comment">
                          //Create an event handler:
                        </span>
                        <br />
                        <span className="variable">var</span>{" "}
                        <span className="string">myEventHandler</span> ={" "}
                        <span className="variable">function</span>{" "}
                        <span className="bracket1">(</span>
                        <span className="bracket1">)</span>{" "}
                        <span className="bracket2">{"{"}</span> <br />
                        <span className="variable">console.log</span>
                        <span className="bracket1">(</span>
                        <span className="string">'I hear a scream!'</span>
                        <span className="bracket1">)</span>; <br />
                        <span className="bracket2">{"}"}</span> <br />
                        <span className="comment">
                          //Assign the event handler to an event:{" "}
                        </span>
                        <br />
                        <span className="variable">eventEmitter</span>
                        <span className="string">.on</span>{" "}
                        <span className="bracket1">(</span>
                        <span className="string">'scream'</span>,
                        <span className="class">myEventHandler</span>{" "}
                        <span className="bracket1">)</span>; <br />
                        <span className="comment">
                          //Fire the 'scream' event:
                        </span>{" "}
                        <br />
                        <span className="variable">eventEmitter</span>
                        <span className="string">.emit</span>
                        <span className="bracket1">(</span>
                        <span className="string">'scream'</span>
                        <span className="bracket1">)</span>;
                      </div>
                      <div className="linenumbers">
                        <div className="number">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="developer-apis-notepad">
                    <div className="custom-textarea">
                      <div className="textarea">
                        <span className="variable">def</span>{" "}
                        <span className="class">sum_of_cubes</span>{" "}
                        <span className="bracket1">(</span>a, b
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">sum</span> = 0<br />
                        <span className="variable">for</span>{" "}
                        <span className="class">x</span> in a..b
                        <br />
                        <span className="class">c</span> ={" "}
                        <span className="class">x</span> ** 3<br />
                        <span className="variable">end</span>
                        <br />
                        <span className="variable">sum</span> + ={" "}
                        <span className="class">c</span>
                        <br />
                        <span className="variable">end</span>
                        <span className="variable">def</span>{" "}
                        <span className="class">sum_of_cubes</span>{" "}
                        <span className="bracket1">(</span>a, b
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">sum</span> = 0<br />
                        <span className="variable">for</span>{" "}
                        <span className="class">x</span> in a..b
                        <br />
                        <span className="class">c</span> ={" "}
                        <span className="class">x</span> ** 3<br />
                        <span className="variable">end</span>
                        <br />
                        <span className="variable">sum</span> + ={" "}
                        <span className="class">c</span>
                        <br />
                        <span className="variable">end</span>
                      </div>
                      <div className="linenumbers">
                        <div className="number">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="developer-apis-notepad">
                    <div className="custom-textarea">
                      <div className="textarea">
                        $<span className="bracket1">(</span>
                        <span className="string">'.feature-card'</span>
                        <span className="bracket1">)</span>
                        <span className="class">.hover</span>
                        <span className="bracket1">(</span>
                        <span className="variable">function</span> (){" "}
                        <span className="bracket2">{"{"}</span>
                        <br />$<span className="bracket1">(</span>this
                        <span className="bracket1">)</span>
                        <span className="class">.addClass</span>
                        <span className="bracket1">(</span>
                        <span className="string">'active'</span>
                        <span className="bracket1">)</span>;<br />$
                        <span className="bracket1">(</span>
                        <span className="string">
                          '.feature-card.card-active'
                        </span>
                        <span className="bracket1">)</span>
                        <span className="class">.removeClass</span>
                        <span className="bracket1">(</span>
                        <span className="string">'active'</span>
                        <span className="bracket1">)</span>;<br />
                        <span className="bracket2">{"}"}</span>, <br />
                        <span className="variable">function</span> (){" "}
                        <span className="bracket2">{"{"}</span>
                        <br />$<span className="bracket1">(</span>this
                        <span className="bracket1">)</span>
                        <span className="class">.removeClass</span>
                        <span className="bracket1">(</span>
                        <span className="string">'active'</span>
                        <span className="bracket1">)</span>;<br />
                        $(
                        <span className="string">
                          '.feature-card.card-active'
                        </span>
                        )<span className="class">.addClass</span>
                        <span className="bracket1">(</span>
                        <span className="string">'active'</span>
                        <span className="bracket1">)</span>;<br />
                        <span className="bracket2">{"}"}</span>
                        <br />
                        <span className="variable">function</span> (){" "}
                        <span className="bracket2">{"{"}</span>
                        <br />$<span className="bracket1">(</span>this
                        <span className="bracket1">)</span>
                        <span className="class">.toggleClass</span>
                        <span className="bracket1">(</span>
                        <span className="string">'active'</span>
                        <span className="bracket1">)</span>;<br />
                        <span className="bracket2">{"}"}</span>
                        <span className="bracket1">)</span>;
                      </div>
                      <div className="linenumbers">
                        <div className="number">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="developer-apis-notepad">
                    <div className="custom-textarea">
                      <div className="textarea">
                        <span className="import">import</span>{" "}
                        <span className="variable">numpy</span> as{" "}
                        <span className="class">numpy</span>
                        <br />
                        <span className="variable">a</span> ={" "}
                        <span className="string">np.ones</span>
                        <span className="bracket1">(</span>
                        <span className="bracket2">(</span>3,2
                        <span className="bracket2">)</span>
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">b</span> ={" "}
                        <span className="string">np.array</span>
                        <span className="bracket1">(</span>
                        <span className="bracket2">[</span>1,2,3
                        <span className="bracket2">]</span>
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">c</span> ={" "}
                        <span className="string">np.linspace</span>
                        <span className="bracket1">(</span>2,3,100
                        <span className="bracket1">)</span>
                        <br />
                        <span className="class">print</span>
                        <span className="bracket1">(</span>a*1.5
                        <span className="bracket1">)</span>
                        <br />
                        <span className="class">print</span>
                        <span className="bracket1">(</span>a.c+b
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">x</span> ={" "}
                        <span className="string">np.ones</span>
                        <span className="bracket1">(</span>
                        <span className="bracket2">(</span>6,4
                        <span className="bracket2">)</span>
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">y</span> ={" "}
                        <span className="string">np.array</span>
                        <span className="bracket1">(</span>
                        <span className="bracket2">[</span>2,4,6
                        <span className="bracket2">]</span>
                        <span className="bracket1">)</span>
                        <br />
                        <span className="variable">z</span> ={" "}
                        <span className="string">np.linspace</span>
                        <span className="bracket1">(</span>6,9,300
                        <span className="bracket1">)</span>
                        <br />
                        <span className="class">print</span>
                        <span className="bracket1">(</span>x*2.5
                        <span className="bracket1">)</span>
                        <br />
                        <span className="class">print</span>
                        <span className="bracket1">(</span>y.z-x
                        <span className="bracket1">)</span>
                        <br />
                      </div>
                      <div className="linenumbers">
                        <div className="number">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="developer-apis-notepad">
                    <div className="custom-textarea">
                      <div className="textarea">
                        <span className="variable">const</span> nmbr ={" "}
                        <span className="bracket1">[</span>
                        <span className="string">1, 2, 3, 4, 5</span>
                        <span className="bracket1">]</span>;<br />$
                        <span className="class">.each</span>
                        <span className="bracket1">(</span>
                        <span className="variable">nmbr, function</span>
                        <span className="bracket2">(</span>
                        <span className="string">index, value</span>
                        <span className="bracket2">)</span>
                        <span className="bracket3">{"{"}</span>
                        <br />
                        <span className="variable">var</span> phn = $
                        <span className="bracket4">(</span>
                        <span className="string">"#phone"</span>
                        <span className="class">+value</span>
                        <span className="bracket4">)</span>
                        <br />
                        <span className="variable">if</span> !{" "}
                        <span className="bracket5">(</span>
                        <span className="class">phn.val</span>{" "}
                        <span className="bracket6">(</span>
                        <span className="bracket6">)</span>{" "}
                        <span className="bracket7">{"{"}</span>
                        <br />
                        <span className="variable">console.log</span>
                        <span className="bracket8">(</span>
                        <span className="string">'phone number missing'</span>
                        <span className="bracket8">)</span>;<br />
                        <span className="bracket7">{"}"}</span>
                        <span className="bracket2">{"}"}</span>
                        <span className="bracket1">)</span>;<br />
                        <span className="variable">const</span> nmbr ={" "}
                        <span className="bracket1">[</span>
                        <span className="string">1, 2, 3, 4, 5</span>
                        <span className="bracket1">]</span>;<br />$
                        <span className="class">.each</span>
                        <span className="bracket1">(</span>
                        <span className="variable">nmbr, function</span>
                        <span className="bracket2">(</span>
                        <span className="string">index, value</span>
                        <span className="bracket2">)</span>
                        <span className="bracket3">{"{"}</span>
                        <br />
                        <span className="variable">var</span> phn = $
                        <span className="bracket4">(</span>
                        <span className="string">"#phone"</span>
                        <span className="class">+value</span>
                        <span className="bracket4">)</span>
                        <br />
                        <span className="variable">if</span> !{" "}
                        <span className="bracket5">(</span>
                        <span className="class">phn.val</span>{" "}
                        <span className="bracket6">(</span>
                        <span className="bracket6">)</span>{" "}
                        <span className="bracket7">{"{"}</span>
                        <br />
                        <span className="variable">console.log</span>
                        <span className="bracket8">(</span>
                        <span className="string">'phone number missing'</span>
                        <span className="bracket8">)</span>;<br />
                        <span className="bracket7">{"}"}</span>
                        <span className="bracket2">{"}"}</span>
                        <span className="bracket1">)</span>;<br />
                      </div>
                      <div className="linenumbers">
                        <div className="number">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </DevApiStyleWrapper>
  );
};

export default DevAPI;
