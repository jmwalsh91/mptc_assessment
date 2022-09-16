import { createClient } from '@supabase/supabase-js'
import type {PostgrestResponse, PostgrestError} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const dbClient = createClient(supabaseUrl, supabaseKey)

export async function createStudent(name: string ) {
    const { data, error } = await dbClient
        .from('Students')
        .insert([
            { name }
        ])
    return { data, error }
}
