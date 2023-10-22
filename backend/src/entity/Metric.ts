import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Metric {

    @PrimaryGeneratedColumn({ name: "id_met" })
    id: number

    @Column({ name: "name_met" })
    name: string

    @Column({ name: "value_met" })
    value: number

    @Column({ name: "due_data_met", type: "timestamp" })
    dueData: Date


}
