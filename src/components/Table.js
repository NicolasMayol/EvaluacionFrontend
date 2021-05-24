import TableBody from "../atoms/Table/TableBody"
import TableHead from "../atoms/Table/TableHead"

export default function Table(){
	return (
		<table className='tableContainer'>
      		<TableHead/>
      		<TableBody/>
		</table>
	);
};

