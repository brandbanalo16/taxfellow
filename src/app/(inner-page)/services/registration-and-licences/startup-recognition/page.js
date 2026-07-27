import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Startup Recognition Services | Taxfello',
    description: 'DPIIT Startup India recognition, 80IAC tax exemption, and government scheme registrations. Unlock tax holidays, IP benefits, and funding access for your startup.',
    keywords: ['startup recognition', 'DPIIT recognition', 'Startup India', '80IAC tax exemption', 'startup registration India']
};

export default function StartupRecognitionPage() {
    const subData = servicesData.subServices.find(s => s.id === 'startup-recognition');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
