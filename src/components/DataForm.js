import { useState } from "react";
import ResultTable from './ResultTable';

const arrDays = [];

function DataForm() {
    const [form, setForm] = useState({ 'date': '', 'km': '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            return { ...prev, [name]: value }
        });
    };

    const handeSubmit = (e) => {
        e.preventDefault();
        arrDays.push(form);
        setForm({ 'date': '', 'km': '' });
    };

    return (
        <div className="data-form-container">
            <form
                className="data-form"
                onSubmit={handeSubmit}
            >
                <div>
                    <label htmlFor="date" className="lable-text">Дата (дд.мм.гг)</label>
                    <input
                        required
                        id="date"
                        name='date'
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <label htmlFor="km" className="lable-text">Пройдено (км)</label>
                    <input
                        required
                        min="0"
                        id="km"
                        name='km'
                        type="number"
                        value={form.km}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <button>ok</button>
                </div>
            </form>
            <ResultTable arrDays={arrDays} />
        </div>
    );
}

export default DataForm;