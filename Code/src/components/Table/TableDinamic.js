import TableBody from "../../atoms/TableDinamic/TableBody"
import TableHead from "../../atoms/TableDinamic/TableHead"

export default function TableDinamic(){
	return (
		<table className='tableContainer'>
      		<TableHead/>
      		<TableBody/>
		</table>
	);
};