import { useSearchParams } from "react-router-dom"; 
import { ChevronLeftIcon,  } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    const navigate = useNavigate();

    function onBackButtonClick() {
        // Navega de volta para a página anterior
        navigate(-1);
    }

    return ( 
    <div className="w-screen h-screen bg-violet-500 p-6 ">
        
        <div className="w-[500px] space-y-4">
              <div className="flex justify-center relative mb-6">
                <button className="absolute left-0 top-0 bottom-0" onClick={onBackButtonClick}>
                    <ChevronLeftIcon className="w-6 h-6 text-white mb-4" />
                </button>
                 
                
                <h1 className="text-9x1 text-slate-100 font-bold text-center mb-6">
                    Detalhes da Tarefa
                </h1>
               

              </div>

                <div className="bg-slate-400 p-4 rounded-md">
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-white">{description}</p>
                </div>
        </div>
    </div>
);
}
 
export default TaskPage;