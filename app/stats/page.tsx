import { StatsNavMenu } from "../components/navbar/menus";
import stats from '@/data/latest1000drawings.json';

export default function StatsPage() {
    console.log(stats[0].combination)
    return (
        <>
            <StatsNavMenu />
            <h1>Statistik sidan</h1>
            <h2>Använd undermenyn för att komma åt de olika statistiksidorna</h2>
        </>
    );
}