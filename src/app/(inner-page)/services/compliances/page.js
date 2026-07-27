import servicesData from '@/data/services-data.json';
import MainServicePage from '@/components/service-pages/MainServicePage';

export const metadata = {
    title: 'Compliances Services | Taxfello',
    description: 'Complete compliance management — income tax filing, ROC/MCA annual returns, payroll & PF compliance, legal drafting. Never miss a deadline. Expert CA/CS team across India.',
    keywords: ['compliance services', 'income tax filing', 'ROC filing', 'MCA compliance', 'payroll compliance', 'TDS return filing']
};

export default function CompliancesPage() {
    const serviceData = servicesData.mainServices.find(s => s.id === 'compliances');
    return <MainServicePage serviceData={serviceData} />;
}
