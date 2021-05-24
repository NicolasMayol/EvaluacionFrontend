import TableBody from "../../atoms/TableStatic/TableBody"
import TableHead from "../../atoms/TableStatic/TableHead"

export default function TableStatic(){
	return (
		<table className='tableContainer'>
      		<TableHead/>
      		<TableBody/>
		</table>
	);
};

