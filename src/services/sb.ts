import { createClient } from '@supabase/supabase-js'
import type {PostgrestResponse, PostgrestError} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const dbClient = createClient(supabaseUrl, supabaseKey)
export interface StudentData {
    name: string
    app_submitted: boolean
    app_approved: "pending" | "approved" | "rejected"
    mtg_sched: boolean
    mtg_done: boolean
    pgm_selected: boolean
    pgm_chosen: number
    pgm_approved: boolean
    app_status_sent: boolean
    pgm_status_sent: boolean
}

export async function createStudent(name: string ) {
    const { data, error } = await dbClient
        .from('Students')
        .insert(
            { name: name, app_submitted: false, app_approved: "pending", mtg_sched: false, mtg_done: false, pgm_selected: false, pgm_chosen: 0, pgm_approved: false, app_status_sent: false }
        )
    return { data, error }
}

export async function getAllStudents(): Promise< StudentData[]> {
    let studentArr = []
    const { data, error } = await dbClient
        .from('Students')
        .select()
    if (error) {
        throw error
    }
   
       return studentArr = data as StudentData[]
    
}

export async function login(name: string, isStaff: boolean) {
    if (isStaff) {
        const user =  await dbClient
.from("Staff")
.select()
.match({name: name})
return user? user : null
    } else if (!isStaff) {
 let user = await dbClient
 .from("Students")
 .select()
.match({name: name})
 return user? user : null
}
}
