import { useState } from "react"
import { Box } from "../../../../components/Box/Box"
import { FormControl } from "../../../../components/FormControl/FormControl"
import { SubmitButton } from "../../../../components/Button/Button"

interface MetricCreateProps {
    onSave: () => void
}


export const MetricCreate: React.FC<MetricCreateProps> = ({ onSave }) => {
    const [formData, setFormData] = useState({
        name: "metric name",
        value: "50",
        dueDate: "2023-10-21T17:04"
    })

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(p => ({ ...p, [field]: event.target.value }))

    }

    const handleSubmit = async (formValue: React.FormEvent) => {
        formValue.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        await fetch("http://localhost:8080/api/v1/metric", requestOptions)

        onSave()
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <label>Name</label>
                    <input id="name" type="text" value={formData.name} onChange={handleChange("name")} />
                </FormControl>
                <FormControl>
                    <label>Value</label>
                    <input id="value" type="number" value={formData.value} onChange={handleChange("value")} />
                </FormControl>
                <FormControl>
                    <label>Timestamp</label>
                    <input type="datetime-local" id="timestampInput" value={formData.dueDate} onChange={handleChange("dueDate")} />
                </FormControl>
                <FormControl>
                    <SubmitButton type="submit">Save</SubmitButton>
                </FormControl>
            </form>
        </Box>
    )
}