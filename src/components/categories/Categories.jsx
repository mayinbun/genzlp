import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const categoryList = [
    "Antiek en Kunst",
    "Audio, Tv en Foto",
    "Auto's",
    "Auto-onderdelen",
    "Auto diversen",
    "Boeken",
    "Cd's en Dvd's",
    "Computers en Software",
    "Diensten en Vakmensen",
    "Dieren en Toebehoren",
    "Fietsen en Brommers",
    "Hobby en Vrije tijd",
    "Huis en Inrichting",
    "Huizen en Kamers",
    "Kinderen en Baby's",
    "Kleding | Dames",
    "Kleding | Heren",
    "Motoren",
    "Muziek en Instrumenten",
    "Spelcomputers en Games",
    "Sport en Fitness",
    "Mobiele telefoons",
    "Tickets en Kaartjes",
    "Vacatures",
    "Vakantie",
    "Watersport en Boten",
    "Diversen"
];

const Categories = () => {
    const [hidden, hide] = useState(false);
    const [selected, toggleSelect] = useState(new Set());
    const toggleSelection = (category) => {
        if (selected.has(category)) {
            toggleSelect(prev => new Set([...prev].filter(x => x !== category)))
        } else {
            toggleSelect(prev => new Set([...prev, category]));
        }
    }
    if (hidden) return null;
    return (
        <>
        <Stack className="skip" direction="row">
            <Link
                component="button"
                variant="body1"
                onClick={hide}
                className="skipButton"
            >
            Skip
        </Link>
        </Stack>

        <div className="header1">What are your interests?</div>
        <div className="header2">You will get items based on this selection. Don’t worry, you can always change this in your feed</div>
        <Stack className="categories" direction="row" >
            {categoryList.map(category => <Chip key={category} onClick={()=>toggleSelection(category)} className="category" label={category} variant={selected.has(category) ? "filled" : "outlined"}/>)}
        </Stack>
        <Stack className="shopping" direction="row" spacing={1}>
            <Button className="shoppingButton" onClick={hide} variant="contained">Start shopping</Button>
        </Stack>
        </>
    )
}

export default Categories;