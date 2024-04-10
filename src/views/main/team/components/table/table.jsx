import {
    Card,
    Typography,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import TablePagination from "../../../components/table/pagination/pagination";
import {Link} from "react-router-dom";

const TABLE_HEAD = ["Name", "No. of Doctors", "Consultant TeamPatients", "Wards"];
const TABLE_ROWS = [
    {name: "Neurology", colSpan: 4},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "Dermatology", colSpan: 4},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "Orthopedic", colSpan: 4},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
    {name: "NEU-F1",link:"/teams/detail", noDoctor: "1", consultant: "Dr. Marcus Johnson", ward: "NEU-F1,NEU-F1",},
];

export function TeamTable({buttonName}) {
    return (
        <Card className="h-full w-full shadow-none border border-gray-100">
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {TABLE_ROWS.map(
                        (
                            {
                                name,
                                link,
                                noDoctor,
                                consultant,
                                ward,
                                colSpan
                            },
                            index,
                        ) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={`p-4 border-b border-blue-gray-50 ${colSpan ? "bg-themeColor !text-white" : "bg-white"}`}
                                        colSpan={colSpan ? colSpan : 1}>
                                        <div className="flex items-center gap-3">
                                            <Link
                                                to={link}
                                                variant="small"
                                                className="font-bold"
                                            >
                                                {name}
                                            </Link>
                                        </div>
                                    </td>
                                    {noDoctor &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {noDoctor}
                                            </Typography>
                                        </td>}

                                    {consultant &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {consultant}
                                            </Typography>
                                        </td>}

                                    {ward &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {ward}
                                            </Typography>
                                        </td>}
                                </tr>
                            )
                                ;
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <TablePagination/>
            </CardFooter>
        </Card>
    );
}