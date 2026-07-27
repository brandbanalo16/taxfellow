import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'MIS & KPI Reporting Services | Taxfello Virtual CFO',
    description: 'Monthly MIS reports, KPI dashboards, budget vs actual variance analysis, and department-wise profitability reports. Data-driven decisions every month.',
    keywords: ['MIS reporting', 'KPI dashboard', 'management information system', 'budget variance report', 'profitability report', 'management reports']
};

export default function MISKPIReportingPage() {
    const subData = servicesData.subServices.find(s => s.id === 'mis-kpi-reporting');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
