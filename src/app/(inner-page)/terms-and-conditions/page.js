"use client"
import React from 'react';
import HeaderTwo from '@/components/header/HeaderTwo';
import Breadcrumb from '@/components/Breadcrumb';
import FooterTwo from '@/components/footer/FooterTwo';
import BackToTop from '@/components/BackToTop';

export default function TermsAndConditionsPage() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Terms and Conditions' }
    ];

    return (
        <div style={{ backgroundColor: '#fafbfc' }}>
            <HeaderTwo />
            <Breadcrumb title="Terms & Conditions" breadcrumbs={breadcrumbs} />

            <div className="container" style={{ padding: '80px 15px 100px' }}>
                <div style={{
                    background: '#fff',
                    border: '1px solid #eef2f6',
                    borderRadius: '20px',
                    padding: '50px 40px',
                    boxShadow: '0 4px 30px rgba(15, 23, 42, 0.02)',
                    color: '#334155',
                    lineHeight: '1.75',
                    fontSize: '15px'
                }}>
                    <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                        Terms & Conditions
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '30px' }}>
                        Brand name: <strong>Texfello</strong> | Managed by: <strong>Clearverge Consulting Private Limited</strong>
                    </p>

                    <p>
                        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website, mobile application, dashboard, client portal and services offered under the brand &quot;Texfello&quot; (&quot;Platform&quot;), managed by Clearverge Consulting Private Limited, a company incorporated under the Companies Act, 2013 having its registered office address at 709, 8th Floor, Westend Mall, Janakpuri, Delhi 110058 (&quot;Company&quot;, &quot;Clearverge&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;).
                    </p>
                    <p>
                        By accessing the Platform, creating an account, uploading documents, making a payment, availing any service, or communicating with us through email, WhatsApp, telephone, dashboard or any other channel, you (&quot;Client&quot;, &quot;User&quot; or &quot;you&quot;) confirm that you have read, understood and agree to be bound by these Terms and by our Privacy Policy and Refund & Cancellation Policy, each of which is incorporated into these Terms by reference.
                    </p>
                    <p style={{ marginBottom: '40px' }}>
                        If you do not agree to these Terms, you must not use the Platform or our services.
                    </p>

                    {[
                        {
                            num: "1",
                            title: "Eligibility and Capacity",
                            content: (
                                <>
                                    <p>You may use the Platform only if you are:</p>
                                    <ul>
                                        <li>a natural person of at least 18 years of age and competent to contract under the Indian Contract Act, 1872; or</li>
                                        <li>a person duly authorised to act on behalf of a company, LLP, firm, trust, society or other entity, and warranting that you have the authority to bind that entity.</li>
                                    </ul>
                                    <p>We do not knowingly offer services to, or collect personal data from, children as defined under the Digital Personal Data Protection Act, 2023. Where any service relates to a minor, it must be transacted by the parent or lawful guardian.</p>
                                    <p>Where you engage us on behalf of an entity, &quot;Client&quot; means both you and that entity, and you and the entity are jointly and severally liable under these Terms.</p>
                                </>
                            )
                        },
                        {
                            num: "2",
                            title: "Nature of Services",
                            content: (
                                <>
                                    <p>Through the Platform, the Company offers compliance, taxation, regulatory filing, documentation, business set-up and allied professional support services. These may include:</p>
                                    <ul>
                                        <li>GST registration, return filing, reconciliation, notices and related compliance support;</li>
                                        <li>Income tax return preparation and filing support, and income tax compliance assistance;</li>
                                        <li>TDS/TCS computation, return filing and related support;</li>
                                        <li>Company, LLP, firm, proprietorship and other business registration support;</li>
                                        <li>FSSAI, MSME/Udyam, IEC, Shops & Establishment, professional tax, labour law and allied registrations;</li>
                                        <li>ROC/MCA annual filings and related corporate secretarial support;</li>
                                        <li>Payroll processing, HR documentation and statutory compliance support;</li>
                                        <li>Accounting, bookkeeping, financial reporting and reconciliation support;</li>
                                        <li>Licence applications, renewals, certifications and other government portal assistance;</li>
                                        <li>Advisory, drafting and documentation support.</li>
                                    </ul>
                                    <p>The precise scope of any engagement is defined by the service you select and the quotation, invoice, dashboard confirmation, engagement letter or written communication issued for it. Anything not expressly included in that scope is outside the engagement.</p>
                                </>
                            )
                        },
                        {
                            num: "3",
                            title: "Professional Services Reserved to Licensed Practitioners",
                            content: (
                                <>
                                    <p>Certain services are, under Indian law, reserved to individually licensed professionals and cannot be rendered by a body corporate. These include statutory audit and attestation under the Chartered Accountants Act, 1949, secretarial audit and certification under the Company Secretaries Act, 1980, cost audit under the Cost and Works Accountants Act, 1959, and appearance or pleading before courts under the Advocates Act, 1961.</p>
                                    <p>Accordingly:</p>
                                    <ul>
                                        <li>The Company is not a firm of chartered accountants, company secretaries, cost accountants or advocates, and does not hold itself out as one.</li>
                                        <li>Where an engagement requires audit, attestation, certification, a signed professional opinion, or representation before an authority or court, that work is performed by an independently licensed practitioner holding a valid Certificate of Practice, in their own name and under their own professional responsibility.</li>
                                        <li>Such a practitioner may be introduced or coordinated through the Platform. Their professional obligations, liability and duty of care run directly to you and are governed by their own engagement terms and the rules of their regulating institute. The Company does not assume, guarantee or underwrite that liability, and their fee may be separate from the Platform fee.</li>
                                        <li>Nothing on the Platform constitutes legal advice or an opinion by a legal practitioner, and no advocate-client relationship arises with the Company.</li>
                                    </ul>
                                    <p>The Company acts as a technology platform and professional support provider. Where it coordinates the work of a licensed practitioner, it does so as a facilitator and not as the practitioner.</p>
                                </>
                            )
                        },
                        {
                            num: "4",
                            title: "Facilitation and No Guarantee of Outcome",
                            content: (
                                <>
                                    <p>Final approval, registration, acceptance, assessment, refund, cancellation, order or certificate issuance rests solely with the relevant government department, statutory authority, bank, financial institution or third-party portal. Our role is to prepare, assist and submit; the decision is never ours.</p>
                                    <p>We therefore do not guarantee:</p>
                                    <ul>
                                        <li>approval of any application, registration, return, claim or filing;</li>
                                        <li>any particular tax benefit, subsidy, licence, certificate, refund, order or financial outcome;</li>
                                        <li>the timelines of any government department, portal or third party;</li>
                                        <li>that advice remains valid after a change in law, facts, documents or circumstances.</li>
                                    </ul>
                                    <p>Any tax, regulatory or compliance view we express is based on the information and documents you provide and the law as understood at the time it is given. It is not a warranty of result, and it should not be relied upon as a substitute for a signed professional opinion where one is required.</p>
                                </>
                            )
                        },
                        {
                            num: "5",
                            title: "Client Responsibilities",
                            content: (
                                <>
                                    <p>You are responsible for:</p>
                                    <ul>
                                        <li>providing true, correct, complete and current information;</li>
                                        <li>submitting documents, records, confirmations and clarifications on time;</li>
                                        <li>reviewing every draft, return, form, application, computation and declaration before it is filed, and confirming it is correct;</li>
                                        <li>verifying facts, figures, bank details, PAN, Aadhaar, GSTIN, CIN, DIN and DSC details before final submission;</li>
                                        <li>paying all taxes, interest, penalties, late fees, government fees and statutory dues on time;</li>
                                        <li>maintaining books of account, records, invoices and supporting documents as required by law;</li>
                                        <li>not supplying false, fabricated, incomplete, misleading or unlawful documents or information;</li>
                                        <li>complying with all applicable laws, rules, regulations and departmental requirements.</li>
                                    </ul>
                                    <p>Filing is made on the basis of your review and confirmation. Subject to Clause 17, we are not responsible for loss, penalty, interest, demand, rejection, notice or prosecution arising from information that you supplied incorrectly, incompletely or late.</p>
                                </>
                            )
                        },
                        {
                            num: "6",
                            title: "Accounts, Credentials and Platform Use",
                            content: (
                                <>
                                    <p>Access to the Platform, dashboard, upload facility, tracking system and payment tools is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Features may be modified, suspended, upgraded, restricted or discontinued.</p>
                                    <p>You agree that:</p>
                                    <ul>
                                        <li>you are responsible for keeping your login credentials, passwords, OTPs and DSC confidential;</li>
                                        <li>activity carried out through your account will be treated as authorised by you, unless you have already notified us of a compromise under this clause;</li>
                                        <li>you will notify us immediately at the address in Clause 24 of any unauthorised access, suspected misuse or security breach;</li>
                                        <li>you will not probe, scan, reverse-engineer, scrape, overload or attempt to gain unauthorised access to the Platform or any connected system.</li>
                                    </ul>
                                    <p>We may restrict, suspend or terminate access in the circumstances set out in Clause 19.</p>
                                </>
                            )
                        },
                        {
                            num: "7",
                            title: "Authority to Act, OTP and Digital Signature",
                            content: (
                                <>
                                    <p>Where you share an OTP, portal credential, DSC authorisation, e-sign approval or written confirmation by email, WhatsApp or dashboard, you authorise the Company and its authorised representatives to take the steps necessary to deliver the service you selected. Those steps may include preparing, uploading, submitting, verifying, downloading, correcting, replying and facilitating payment.</p>
                                    <p>We will use that authority only for the specific service for which it was given. We will not use your credentials for any purpose outside the agreed scope.</p>
                                    <p>You remain responsible for the correctness of the underlying information submitted. Subject to Clause 17, we are not liable for the consequences of an instruction or authorisation you gave, provided we acted within its scope.</p>
                                    <p>A DSC is issued to you personally and its use carries legal consequences under the Information Technology Act, 2000. You should keep custody of your DSC and provide authorisation on a per-use basis wherever practicable.</p>
                                </>
                            )
                        },
                        {
                            num: "8",
                            title: "Service Timelines",
                            content: (
                                <>
                                    <p>Timelines we communicate are estimates. Actual timelines may vary because of government portal downtime, departmental delay, incomplete documents, delay in your response, requests for further clarification, changes in law or procedure, technical failure, or a force majeure event under Clause 21.</p>
                                    <p>We are not liable for delay beyond our reasonable control. We will keep you informed of any material delay we become aware of.</p>
                                </>
                            )
                        },
                        {
                            num: "9",
                            title: "Fees, Payment and Taxes",
                            content: (
                                <>
                                    <ul>
                                        <li>Fees are payable in advance unless agreed otherwise in writing.</li>
                                        <li>The total price for each service, including the break-up of professional fee, government fee and applicable taxes, is displayed before you confirm payment.</li>
                                        <li>Government fees, statutory charges, stamp duty, challans, penalties, interest, late fees, portal charges, certification fees and third-party charges are payable by you in addition to our professional fee.</li>
                                        <li>Fees are exclusive of GST and other applicable taxes unless expressly stated otherwise. GST will be charged at the applicable rate and a tax invoice issued.</li>
                                        <li>Work may be held until payment and complete documents are received.</li>
                                        <li>Payments are non-transferable and will be applied only to the service for which they were made, unless we agree otherwise in writing.</li>
                                        <li>We may revise our fees at any time. A revision applies only to services purchased after the revision takes effect, and never to a service you have already paid for.</li>
                                    </ul>
                                    <p>Where a payment fails, is reversed or is charged back, we may suspend the service until the position is resolved.</p>
                                </>
                            )
                        },
                        {
                            num: "10",
                            title: "Cancellation and Refunds",
                            content: (
                                <>
                                    <p>Cancellations and refunds are governed by our Refund & Cancellation Policy, published on the Platform and forming part of these Terms. That Policy sets out when a refund is available, how it is calculated by reference to the stage of work reached, and the timelines within which it is processed.</p>
                                    <p>Nothing in that Policy or these Terms limits any right you have as a consumer under the Consumer Protection Act, 2019, which prevails over any inconsistent provision.</p>
                                </>
                            )
                        },
                        {
                            num: "11",
                            title: "Reliance on Client Information",
                            content: (
                                <>
                                    <p>You are responsible for the accuracy, authenticity and completeness of all information and documents you provide.</p>
                                    <p>Unless we have been specifically engaged to perform audit, assurance or verification work, we may rely on what you provide without independent verification, and we do not undertake to detect fraud, error or misstatement in it.</p>
                                    <p>Subject to Clause 17, we are not liable for penalty, interest, demand, litigation, notice, rejection or loss arising from information that was incorrect, incomplete, fabricated, misleading or delayed on your side.</p>
                                </>
                            )
                        },
                        {
                            num: "12",
                            title: "Prohibited Conduct",
                            content: (
                                <>
                                    <p>You must not use the Platform to:</p>
                                    <ul>
                                        <li>submit false, forged, fabricated or manipulated documents;</li>
                                        <li>conceal income, turnover, liabilities, assets or transactions;</li>
                                        <li>use another person’s PAN, Aadhaar, GSTIN, DSC, DIN, CIN, bank account or credentials without lawful authority;</li>
                                        <li>facilitate tax evasion, money laundering, benami transactions, fraudulent registration, fake invoicing or shell entities;</li>
                                        <li>misrepresent facts to any authority;</li>
                                        <li>infringe the intellectual property or privacy of any person;</li>
                                        <li>upload malware, or interfere with the security or integrity of the Platform.</li>
                                    </ul>
                                    <p>Where we reasonably suspect fraud or unlawful activity, we may suspend or terminate services immediately and report the matter to the appropriate authority where required or permitted by law. In such a case no refund is payable for the affected service.</p>
                                </>
                            )
                        },
                        {
                            num: "13",
                            title: "Communications",
                            content: (
                                <>
                                    <p>We will send you service communications — document requests, filing confirmations, compliance reminders, payment receipts and account or security notices — by email, SMS, WhatsApp, telephone or dashboard notification. These are necessary to deliver the service and continue for as long as the engagement is live.</p>
                                    <p>We will send you promotional communications only where you have consented to receive them. You may withdraw that consent at any time using the unsubscribe link, your dashboard preferences, or by writing to the Grievance Officer in Clause 23, without affecting the service you have purchased.</p>
                                    <p>Your registration on the Platform is a commercial relationship for the purposes of TRAI regulations on unsolicited commercial communication.</p>
                                </>
                            )
                        },
                        {
                            num: "14",
                            title: "Records and Retention",
                            content: (
                                <>
                                    <p>We retain documents, filings, invoices, working papers, communications and service records for as long as needed to deliver the service, and thereafter for the period required by applicable tax, corporate and data protection law. Where personal data is no longer needed for the purpose it was collected for and no legal obligation requires its retention, it will be erased in accordance with the Privacy Policy.</p>
                                    <p>You should independently preserve your own originals, acknowledgements, challans, returns, certificates, notices, orders and invoices. The Platform is not a document archive, and we do not undertake permanent storage unless separately agreed in writing.</p>
                                    <p>On written request, and subject to fees being settled, we will provide copies of filings and documents we hold for you, within a reasonable period.</p>
                                </>
                            )
                        },
                        {
                            num: "15",
                            title: "Third-Party and Government Portals",
                            content: (
                                <>
                                    <p>Several services depend on government websites, statutory portals, payment gateways, cloud services, banks and courier services that we do not control. We are not responsible for their downtime, errors, rejections or delays, for data they display incorrectly, for failure of OTP, DSC, Aadhaar, PAN or gateway authentication, or for a change they make to a form, process or requirement.</p>
                                    <p>This clause allocates responsibility for third-party systems. It does not excuse us from our own obligations under Clause 17.</p>
                                </>
                            )
                        },
                        {
                            num: "16",
                            title: "Intellectual Property",
                            content: (
                                <>
                                    <p>The Platform and all content, templates, formats, checklists, software, dashboard design, website content, methodology, training material, brand names and logos are owned by or licensed to Clearverge Consulting Private Limited. &quot;Texfello&quot; and associated marks are proprietary to the Company.</p>
                                    <p>You may use the Platform and any deliverable prepared for you for your own internal and compliance purposes. You must not copy, reproduce, sell, commercially exploit, modify, distribute or publish our proprietary material without our prior written consent.</p>
                                    <p>You retain ownership of the documents and data you upload. You grant us a limited, non-exclusive licence to use them solely to deliver the services you have engaged us for and to meet our legal obligations. We do not sell your data, and we do not use it to train third-party artificial intelligence models.</p>
                                </>
                            )
                        },
                        {
                            num: "17",
                            title: "Limitation of Liability",
                            content: (
                                <>
                                    <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for fraud, fraudulent misrepresentation, wilful misconduct, gross negligence, death or personal injury, or any liability under the Consumer Protection Act, 2019.</p>
                                    <p>Subject to that, and to the maximum extent permitted by law:</p>
                                    <ul>
                                        <li>our aggregate liability arising out of or in connection with a service is limited to the professional fee actually received by us for that specific service;</li>
                                        <li>we are not liable for indirect, incidental, special, punitive or consequential loss, or for loss of profit, revenue, goodwill, business opportunity or reputation;</li>
                                        <li>we are not liable for tax demands, penalties, interest or late fees that arise from your own default, from information you supplied incorrectly or late, or from a decision of an authority;</li>
                                        <li>we are not liable for portal downtime, cyberattack or third-party system failure outside our reasonable control.</li>
                                    </ul>
                                    <p>Where a loss is caused by our own negligence or breach in performing the service, this clause limits the amount of that liability but does not exclude it.</p>
                                    <p>Any claim must be brought within twelve months of the date you became aware, or ought reasonably to have become aware, of the circumstances giving rise to it.</p>
                                </>
                            )
                        },
                        {
                            num: "18",
                            title: "Indemnity",
                            content: (
                                <>
                                    <p>You agree to indemnify and hold harmless the Company, its directors, officers, employees and authorised representatives against claims, losses, damages, penalties, costs and expenses (including reasonable legal fees) arising from:</p>
                                    <ul>
                                        <li>your breach of these Terms;</li>
                                        <li>information or documents you provided that were false, incomplete or misleading;</li>
                                        <li>your misuse of the Platform or services;</li>
                                        <li>your violation of any applicable law;</li>
                                        <li>unauthorised use of credentials, OTP or DSC attributable to you;</li>
                                        <li>a third-party claim arising from documents or instructions you supplied.</li>
                                    </ul>
                                    <p>This indemnity does not apply to the extent the loss was caused by our own negligence, breach or wilful misconduct. We will notify you promptly of any claim, allow you to participate in its defence, and not settle it without your consent, such consent not to be unreasonably withheld.</p>
                                </>
                            )
                        },
                        {
                            num: "19",
                            title: "Suspension and Termination",
                            content: (
                                <>
                                    <p>We may suspend, restrict or terminate services or Platform access where:</p>
                                    <ul>
                                        <li>payment is not made when due;</li>
                                        <li>you do not provide required documents or clarifications;</li>
                                        <li>you provide false, incomplete or misleading information;</li>
                                        <li>you behave abusively or unlawfully toward our staff or representatives;</li>
                                        <li>you misuse the Platform;</li>
                                        <li>continuing would expose us to legal, regulatory or reputational risk;</li>
                                        <li>you breach these Terms.</li>
                                    </ul>
                                    <p>Except where the breach is serious or where a legal or regulatory obligation requires immediate action, we will give you notice and a reasonable opportunity to remedy the position before terminating.</p>
                                    <p>You may terminate an engagement at any time by written notice. The consequences for fees already paid are governed by the Refund & Cancellation Policy.</p>
                                    <p>On termination we will, on request and subject to settled fees, provide copies of the filings and documents we hold for you. Termination does not affect our right to recover fees and charges properly due, nor any clause intended to survive it, including Clauses 17, 18, 22, 23 and 24.</p>
                                </>
                            )
                        },
                        {
                            num: "20",
                            title: "Independent Relationship",
                            content: (
                                <p>Nothing in these Terms creates an employer-employee relationship, partnership, joint venture, agency or fiduciary relationship between you and the Company. We act as an independent service provider.</p>
                            )
                        },
                        {
                            num: "21",
                            title: "Force Majeure",
                            content: (
                                <>
                                    <p>We are not liable for failure or delay caused by events beyond our reasonable control, including natural disaster, fire, flood, epidemic or pandemic, strike, internet or server failure, cyberattack, power outage, government restriction, change in law, court order, portal downtime, war or civil disturbance.</p>
                                    <p>We will inform you of the event and its likely effect. Where it continues for more than sixty days, either party may terminate the affected service, and any fee paid for work not performed will be refunded.</p>
                                </>
                            )
                        },
                        {
                            num: "22",
                            title: "Governing Law, Jurisdiction and Disputes",
                            content: (
                                <>
                                    <p>These Terms are governed by the laws of India.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>22.1 Raising a concern</h6>
                                    <p>Please raise any concern first with our Grievance Officer under Clause 23. Most matters are resolved at this stage. We will work with you in good faith to resolve it within thirty days.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>22.2 Arbitration</h6>
                                    <p>If the matter is not resolved, it will be referred to arbitration by a sole arbitrator under the Arbitration and Conciliation Act, 1996. The seat and venue will be Delhi and the language English. The parties will attempt to agree the arbitrator; failing agreement within thirty days, the appointment will be made under the Act. Each party bears its own costs unless the arbitrator directs otherwise.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>22.3 Consumers</h6>
                                    <p>If you are a consumer under the Consumer Protection Act, 2019, this clause does not require you to arbitrate and does not take away your right to approach the consumer forum having jurisdiction, including where you reside. Subject to that, the courts at Delhi have exclusive jurisdiction.</p>
                                </>
                            )
                        },
                        {
                            num: "23",
                            title: "Grievance Officer",
                            content: (
                                <>
                                    <p>In accordance with the Consumer Protection (E-Commerce) Rules, 2020, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Digital Personal Data Protection Act, 2023, the following officer may be contacted for any grievance concerning the Platform, our services or your personal data:</p>
                                    
                                    <table className="table table-bordered mt-3 mb-3" style={{ fontSize: '14px' }}>
                                        <thead>
                                            <tr style={{ background: '#f8fafc' }}>
                                                <th>Field</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Designation</strong></td>
                                                <td>Grievance Officer, Texfello</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Company</strong></td>
                                                <td>Clearverge Consulting Private Limited</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Address</strong></td>
                                                <td>709, 8th Floor, Westend Mall, Janakpuri, Delhi 110058</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Email</strong></td>
                                                <td>support@taxfello.com</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Telephone</strong></td>
                                                <td>+91 88004 85106</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Working hours</strong></td>
                                                <td>Monday to Friday, 10:00 to 18:00 IST</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <p>We will acknowledge a complaint within forty-eight hours of receipt and resolve it within one month, as required under the Consumer Protection (E-Commerce) Rules, 2020. Where a complaint concerns content or conduct governed by the Information Technology Rules, 2021, it will be acknowledged within twenty-four hours and disposed of within fifteen days.</p>
                                    <p>If you are not satisfied with the outcome of a data protection grievance, you may approach the Data Protection Board of India. You may also register a consumer complaint on the National Consumer Helpline (1915) or the e-Daakhil portal.</p>
                                </>
                            )
                        },
                        {
                            num: "24",
                            title: "Contact Details",
                            content: (
                                <table className="table table-bordered mt-3 mb-3" style={{ fontSize: '14px' }}>
                                    <thead>
                                        <tr style={{ background: '#f8fafc' }}>
                                            <th>Field</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Legal entity</strong></td>
                                            <td>Clearverge Consulting Private Limited</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Platform</strong></td>
                                            <td>Texfello</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Address</strong></td>
                                            <td>709, 8th Floor, Westend Mall, Janakpuri, Delhi 110058</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email</strong></td>
                                            <td>support@taxfello.com</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Customer care</strong></td>
                                            <td>+91 88004 85106</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Website</strong></td>
                                            <td>www.taxfello.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        },
                        {
                            num: "25",
                            title: "Amendments",
                            content: (
                                <>
                                    <p>We may amend these Terms. The current version, with its effective date, will always be published on the Platform.</p>
                                    <p>Where a change materially affects your rights or obligations, we will give you reasonable prior notice by email or dashboard notification before it takes effect. Changes apply prospectively. Services you have already paid for continue to be governed by the Terms in force when you purchased them.</p>
                                    <p>Continued use of the Platform after a change takes effect constitutes acceptance of the amended Terms. If you do not accept them, you may stop using the Platform and terminate under Clause 19.</p>
                                </>
                            )
                        },
                        {
                            num: "26",
                            title: "General",
                            content: (
                                <>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>26.1 Severability</h6>
                                    <p>If any provision is held invalid or unenforceable, it will be modified to the minimum extent necessary to make it enforceable, or severed if it cannot be. The remaining provisions continue in force.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>26.2 Waiver</h6>
                                    <p>A failure or delay in enforcing any provision is not a waiver of it.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>26.3 Assignment</h6>
                                    <p>You may not assign your rights under these Terms without our written consent. We may assign or transfer our rights on notice to you, including as part of a reorganisation or transfer of business, provided your rights are not adversely affected.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>26.4 Entire agreement</h6>
                                    <p>These Terms, together with the Privacy Policy, the Refund & Cancellation Policy and the applicable quotation, invoice or engagement letter, form the entire agreement between you and the Company for the relevant service. Where there is a conflict, a signed engagement letter prevails over these Terms for that engagement.</p>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '15px 0 8px' }}>26.5 Language</h6>
                                    <p>These Terms are drawn up in English, which governs their interpretation.</p>
                                </>
                            )
                        }
                    ].map((sec) => (
                        <div key={sec.num} style={{ marginBottom: '35px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>
                                {sec.num}. {sec.title}
                            </h3>
                            <div style={{ color: '#475569', fontSize: '14.5px' }}>
                                {sec.content}
                            </div>
                        </div>
                    ))}

                    <div style={{ marginTop: '40px', background: '#f8fafc', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                        <p style={{ margin: 0, fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>
                            By creating an account, making a payment, or using the Platform, you confirm that you have read and accepted these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div>

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
