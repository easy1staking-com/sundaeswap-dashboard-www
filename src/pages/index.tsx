import Head from "next/head";
import Scoops from "./components/Scoops/Scoops";
import ScoopsPies from "./components/ScoopsPie/ScoopsPie";
import BasicBars from "./components/ScoopsPeriodicStats/ScoopsPeriodicStats";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scoops</title>
        <meta name="description" content="Scoops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container direction="row" spacing={2} justifyContent={"space-evenly"} alignItems={"center"}>
          <Grid item>
            <ScoopsPies />
          </Grid>
          <Grid item>
            <BasicBars />
          </Grid>
        </Grid>
        <Scoops />
      </main>
    </>
  );
}
