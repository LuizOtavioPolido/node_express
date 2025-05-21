import { CardItemStyled } from "./CardItemStyle";
import { FaRegTrashAlt } from "react-icons/fa";

type CardItemProps = {
  taskName: string;
  onRemove?: () => void;
  onClick?: () => void;
};

export default function CardItem({ taskName, onClick, onRemove }: CardItemProps) {
  return (
    <CardItemStyled.CardContainer>
      <CardItemStyled.CardContent >
        <div style={{
            marginLeft: 15,
            flex:1
        }} onClick={onClick}>{taskName}</div>

        <CardItemStyled.RemoveTaskButton onClick={onRemove}>
            <FaRegTrashAlt />
        </CardItemStyled.RemoveTaskButton>
      </CardItemStyled.CardContent>
    </CardItemStyled.CardContainer>
  );
}
