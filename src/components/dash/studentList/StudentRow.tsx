import { StudentData } from '~/services/sb'

type Props = {
    student: StudentData
}

function StudentRow( {student}: Props) {
  return (
    <tr key={student.name}>
        <td>{student.name}</td>
        <td>{student.app_submitted}</td>
        <td>{student.app_approved}</td>
        <td>{student.mtg_sched}</td>
        <td>{student.mtg_done}</td>
        <td>{student.pgm_chosen}</td>
        <td>{student.pgm_approved}</td>
        <td>{student.app_status_sent}</td>
        <td>{student.pgm_status_sent}</td>
        </tr>
  )
}

export default StudentRow