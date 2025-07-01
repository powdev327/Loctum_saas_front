
import Input from "../../../form/input/InputField";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";


export const BaseFields = ({
                        position_title, setPositionTitle,
                        description, setDescription,
                        start_date, setStartDate,
                        end_date, setEndDate,
                        hourly_rate, setHourlyRate,
                        industry_type, setIndustryType,
                        options
                    }) => (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 px-2">
        <div>
            <Label>Position Title</Label>
            <Input value={position_title} onChange={(e) => setPositionTitle(e.target.value)} />
        </div>
        <div>
            <Label>Description</Label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <Label>Start Date</Label>
            <Input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
            <Label>End Date</Label>
            <Input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        
        {/* Add Per-Day Work Hours button right after date inputs - support both industry types */}
        {(industry_type === "pharmacy" || industry_type === "dentalClinic") && 
         contract_type === "remplacement" && 
         showPerDayWorkHours && start_date && end_date && (
            <div className="lg:col-span-2 mt-0 mb-3">
                <Button 
                    onClick={() => setIsWorkHoursPopupOpen(true)}
                    variant="outline"
                    className="w-full"
                >
                    Configure Per-Day Work Hours
                </Button>
            </div>
        )}
        
        <div>
            <Label>Hourly Rate</Label>
            <Input
                type="number"
                value={hourly_rate}
                onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
            />
        </div>
        <div>
            <Label>Industry Type</Label>
            <Select
                options={options}
                placeholder="Select industry"
                value={options.find(opt => opt.value === industry_type)}
                onChange={(option) => setIndustryType(option?.value || "")}
            />
        </div>
    </div>
);
