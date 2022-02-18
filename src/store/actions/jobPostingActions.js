export const POST_A_JOB="POST_A_JOB"

export function postJob(jobForm){
    return{
        type:POST_A_JOB,
        payload:jobForm
    }
}