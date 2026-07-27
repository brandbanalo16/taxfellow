import servicesData from '@/data/services-data.json';
import MainServicePage from '@/components/service-pages/MainServicePage';

export const metadata = {
    title: 'Registration & Licences Services | Taxfello',
    description: 'Complete business registration and licencing services — company incorporation, GST, FSSAI, trademark, startup recognition, NGO registration and more. Expert CA/CS team, pan-India coverage.',
    keywords: ['business registration', 'company incorporation', 'GST registration', 'trademark registration', 'FSSAI licence', 'startup DPIIT recognition']
};

export default function RegistrationLicencesPage() {
    const serviceData = servicesData.mainServices.find(s => s.id === 'registration');
    return <MainServicePage serviceData={serviceData} />;
}
