import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { get } from 'http';

type Scoop = {
    slot: number;
    txHash: string;
    numOrders: number;
    scooperHash: string;
    isMempool: boolean;
};

const Scoops = () => {

    const [scoops, setScoops] = React.useState<Scoop[]>([]);

    React.useEffect(() => {

        (async () => {

            fetch('https://scooper-api.easy1staking.com/scoops?' + new URLSearchParams({ sort: "DESC", limit: "10" }).toString())
                .then((res) => res.json())
                .then((data) => {
                    const foo: Scoop[] = data.map((s: any) => ({
                        slot: s.slot,
                        txHash: s.txHash,
                        numOrders: s.orders,
                        scooperHash: s.scooperPubKeyHash,
                        isMempool: s.numMempoolOrders
                    }))

                    setScoops(foo);
                });

        })();

    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Slot Number</TableCell>
                        <TableCell align="right">Transaction Hash</TableCell>
                        <TableCell align="right">Number Orders</TableCell>
                        <TableCell align="right">Scooper Hash</TableCell>
                        <TableCell align="right">Mempool</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {scoops.map((scoop) => (
                        <TableRow
                            key={scoop.txHash}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {scoop.slot}
                            </TableCell>
                            <TableCell align="right">{scoop.txHash}</TableCell>
                            <TableCell align="right">{scoop.numOrders}</TableCell>
                            <TableCell align="right">{scoop.scooperHash == '37eb116b3ff8a70e4be778b5e8d30d3b40421ffe6622f6a983f67f3f' ? "EASY1" : scoop.scooperHash}</TableCell>
                            <TableCell align="right">{scoop.isMempool}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Scoops;


