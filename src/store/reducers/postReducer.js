import { POST_A_JOB } from '../actions/jobPostingActions';
import { jobPosts } from '../initialValues/jobPosts';
const initialState={
    jobPosts:jobPosts,
};

export default function postReducer(state=initialState,{type,payload}) {
  switch (type) {
      case POST_A_JOB:
          let job=state.jobPosts.find((j)=>j.job.id===payload.id);
          if(job){
              return{
                  ...state,
              };
          }
          break;
      default:
          return state;
  }
}
