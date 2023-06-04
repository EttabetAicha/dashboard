import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard Admin </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bonjour dans notre Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="les likes de la semaine" total={714000} icon={'ant-design:like'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Nouveaux utilisateurs" total={1352831} color="info" icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Les CV Créé" total={1723315} color="warning" icon={'ant-design:file'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="les CV partager" total={234} color="error" icon={'ant-design:share-alt-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Visites du site Web"
              subheader="(+43%) pour cette année"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'Groupe A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Groupe B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Groupe C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="les utilisateur de notre site "
              chartData={[
                { label: 'Maroc', value: 9000 },
                { label: 'France', value: 435 },
                { label: 'American', value: 1443 },
                { label: 'Italy', value: 443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="les Filière plus l'utiliser"
              subheader="(+43%) pour cette année"
              chartData={[
                { label: 'Développement Digital ', value: 1380 },
                { label: 'Infrastructure Digital', value: 1200 },
                { label: "Gestion d'entreprise", value: 1100 },
                { label: 'Commerce', value: 900 },
                { label: 'comptabilité', value: 800 },
                { label: 'Génie électrique', value: 400 },
                { label: 'Fabrication mécanique', value: 400 },
                { label: 'Agroalimentaire', value: 300 },
                { label: 'Hôtellerie et tourisme', value: 100 },
                { label: 'Réparation des engins à moteurs', value: 99 },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
