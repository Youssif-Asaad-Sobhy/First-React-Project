import "./index.scss";
import { BellRing, X } from "lucide-react";
import { ReactNode } from "react";
interface IProps{
  type:string;
  icon:ReactNode;
  title:string;
  description:string;
};
const Alert = ({type,icon,description,title}:IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div> 
        <X className="close" size={20}/>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Alert;
