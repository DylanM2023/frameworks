import { createContext, useReducer } from "react";

const BlogReducer = (state, action) =>{
    switch(action.type){
        case "SET":
        //Set the whole state
        return action.payload;
        
        case "CREATE":
        //Creates new blog
        state.push(action.payload);
        
        case "DELETE":
        //Deletes Blog
        let filteredblogs = state.filter((b)=>b.id != action.id)
        return filteredblogs;
        
        default:
            return state;
    }
};

export const BlogContext = createContext();

const BlogProvider = ({children}) => {
    const [blogs, dispatch] = useReducer(BlogReducer, null);
    
    return ( 
        <BlogContext.Provider value={{blogs,dispatch}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;