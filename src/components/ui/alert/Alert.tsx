import { X } from 'lucide-react';
import './index.scss'
import { FC, ReactNode } from 'react';

type Props = {
  type: string;
  title: string;
  description: ReactNode;
  icon: ReactNode
}

const Alert: FC<Props> = ({ type, title, description, icon }) => {
  let a = 5;
  console.log(a++);
  return (
    <div className={type}>
      <div className='alert_header'>
        <div className='alert_title'>
          <span>
            {icon}
          </span>
          <h3>{title}</h3>
        </div>
        <span className='close_icon'>
          <X />
        </span>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Alert;