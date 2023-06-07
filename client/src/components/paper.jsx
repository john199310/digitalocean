import Grid from '@mui/material/Grid';

import wallpaper from "../img/wallpaper.jpg";


export default function Backpaper(){

    return(
        <Grid
          item

          sm={6}
          
          
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage: `url(${wallpaper})` ,

            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

    );

    
}


