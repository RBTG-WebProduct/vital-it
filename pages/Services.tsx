import React, { FunctionComponent, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Header from './parts/Header';
import Footer from './parts/Footer';

const Services:FunctionComponent = () => {
    /**
     * Storing state for all the sections in the "What We Do" wrapper.
     * This array represents wether the section is on-screen or not.
     */
    const [isActivated, setIsActivated] = useState<boolean[]>([]);

    /**
     * Adding event listeners to fade in all the sections in the "What We Do" wrapper.
     */
    if(typeof window != 'undefined') {
        window.addEventListener('load', () => {
            /**
             * Setting a defualt value for each section.
             */
            setIsActivated(Array.from(document.getElementsByClassName('Section')!).map(() => {
                return false;
            }));
            testScrollEvents();
        });
        window.addEventListener('scroll', testScrollEvents);
    }

    /**
     * Testing whether each section is on-screen.
     * If it is, update the state variable.
     */
    function testScrollEvents() {
        const sections = Array.from(document.getElementsByClassName('Section')!) as HTMLDivElement[];
        let newValues = JSON.parse(JSON.stringify(isActivated));
        sections.forEach((section, i) => {
            if(section.getBoundingClientRect().bottom < window.innerHeight && section.getBoundingClientRect().top > 0) {
                newValues[i] = true;
            }
        });
        setIsActivated(newValues);
    }

    return <>
        <Header></Header>
        <main>
            <div className='TitleWrapper'>
                <div className='InnerWrapper'>
                    <h1>IT Services</h1>
                    <p>Proactive, expert attention and continual monitoring can prevent fatal network errors, minimize downtime and control operating costs.</p>
                </div>
            </div>
            <div className='ServiceWrapper'>
                <div className='InnerWrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 55.88">
                        <polygon fill="#d13939" points="0 0 42.04 27.97 .09 55.88 0 0"/>
                    </svg>
                    <h2>Network Management</h2>
                    <h4>Advance notice about problems before they can affect your business.</h4>
                    <div className='ColumnWrapper'>
                        <div className='Column'>
                            <div className={`Section ${isActivated[0] ? 'Activated' : ''}`}>
                                <h3>Go-Live Monitoring</h3>
                                <p>The Vital IT software platform is enabled to poll devices not in intervals, but continually in real-time.</p>
                            </div>
                            <div className={`Section ${isActivated[1] ? 'Activated' : ''}`}>
                                <h3>Remote Assist</h3>
                                <p>A set of software tools that allow remote access to workstations and servers for quicker repair, while the user is still enabled to use their workstation.</p>
                            </div>
                            <div className={`Section ${isActivated[2] ? 'Activated' : ''}`}>
                                <h3>Password Management</h3>
                                <p>Copy of all applicable passwords will be provided to the customer either by hard copy or digital media, as requested.</p>
                            </div>
                        </div>
                        <div className='Column'>
                            <div className={`Section ${isActivated[3] ? 'Activated' : ''}`}>
                                <h3>Network Maps</h3>
                                <p>Our software coupled with your enabled switch device will allow us to provide a real-time network map of your entire network. Critical to you is the ability it provides to show any disconnects in the network so we are not manually troubleshooting the source of a particular connectivity issue.</p>
                            </div>
                            <div className={`Section ${isActivated[4] ? 'Activated' : ''}`}>
                                <h3>Maintained Configurations</h3>
                                <p>Set up of all network devices including routers, switches, firewalls, and wireless access points.</p>
                            </div>
                            <div className={`Section ${isActivated[5] ? 'Activated' : ''}`}>
                                <h3>Reporting </h3>
                                <p>Reports are available on the overall health of your network.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ServiceWrapper'>
                <div className='InnerWrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 55.88">
                        <polygon fill="#d13939" points="0 0 42.04 27.97 .09 55.88 0 0"/>
                    </svg>
                    <h2>Device Management</h2>
                    <h4>Optimize and manage your workstations, laptops and other devices on the network.</h4>
                    <div className='ColumnWrapper'>
                        <div className='Column'>
                            <div className={`Section ${isActivated[6] ? 'Activated' : ''}`}>
                                <h3>Preventative maintenance</h3>
                                <p>Maintenance for your equipment including:</p>
                                <ol>
                                    <li>- Life-cycle evaluation of hardware.</li>
                                    <li>- Inspect and physically clean systems as needed.</li>
                                    <li>- Hard drive space usage management.</li>
                                    <li>- Quarterly IT network assessment.</li>
                                    <li>- Update/report on chronic  or acute issues within the network.</li>
                                </ol>
                            </div>
                            <div className={`Section ${isActivated[7] ? 'Activated' : ''}`}>
                                <h3>On Site Service</h3>
                                <p>Our Tech Ops stands ready and prepared to respond and repair non-functioning hardware.</p>
                            </div>
                            <div className={`Section ${isActivated[8] ? 'Activated' : ''}`}>
                                <h3>Remote Assist</h3>
                                <p>Vital IT employs Remote Assist, which provides the capability to remotely troubleshoot individual workstations and servers on a granular level. This view allows you to manipulate all functions typically found in the control panel as well as the ability to log in interactively to assist the end-user. Permission rights for this function can be enabled.</p>
                            </div>
                            <div className={`Section ${isActivated[9] ? 'Activated' : ''}`}>
                                <h3>Patch Management</h3>
                                <p>Applies to all Microsoft service packs/system updates.</p>
                            </div>
                        </div>
                        <div className='Column'>
                            <div className={`Section ${isActivated[10] ? 'Activated' : ''}`}>
                                <h3>Help Desk Support</h3>
                                <p>Utilizing Red Barn's remote access capabilities and other tools within our software suite our expertly trained staff remotely diagnose and correct a large range of problems. Faster resolution is provided with remote technology to minimize loss of productivity.</p>
                            </div>
                            <div className={`Section ${isActivated[11] ? 'Activated' : ''}`}>
                                <h3>Client Assurance</h3>
                                <p>Unique offering available for on-site support without specific time restraints. Vital IT is committed to maintaining the core functionality of all computer hardware via remote and on-site calls as needed.</p>
                            </div>
                            <div className={`Section ${isActivated[12] ? 'Activated' : ''}`}>
                                <h3>Web Ticketing System</h3>
                                <p>Makes all matters regarding computer hardware easy to report so you can track issues, alerts, and general tasks.</p>
                            </div>
                            <div className={`Section ${isActivated[13] ? 'Activated' : ''}`}>
                                <h3>Security</h3>
                                <p>Anti-Virus protection including spyware, malware, and virus protection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ServiceWrapper'>
                <div className='InnerWrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 55.88">
                        <polygon fill="#d13939" points="0 0 42.04 27.97 .09 55.88 0 0"/>
                    </svg>
                    <h2>Data Backup</h2>
                    <h4>Disaster recovery & remote monitoring service allows for greater peace of mind.</h4>
                    <div className='ColumnWrapper'>
                        <div className='Column'>
                            <div className={`Section ${isActivated[14] ? 'Activated' : ''}`}>
                                <h3>Business Continuity</h3>
                                <ol>
                                    <li>- Centralized backup administration from a management console.</li>
                                    <li>- Multiple step verification of backup images with notification via email for your IT personnel.</li>
                                    <li>- Automatic backup of SQL, Exchange and other critical applications.</li>
                                    <li>- Scheduler for automatic full and incremental backups.</li>
                                    <li>- Consolidation tools through image management by providing consolidated daily, weekly, and monthly backups.</li>
                                </ol>
                            </div>
                            <div className={`Section ${isActivated[15] ? 'Activated' : ''}`}>
                                <h3>Disaster Recovery</h3>
                                <ol>
                                    <li>- Rapid recovery of failed servers to any systems or to the cloud.</li>
                                    <li>- Failover to an on-site server, a remote server at our facility, or the cloud. <span>*Dependent on storage needs.</span></li>
                                    <li>- Granular recovery of individual files and folders in moments.</li>
                                    <li>- Simplified migration to new Windows servers.</li>
                                </ol>
                            </div>
                        </div>
                        <div className='Column'>
                            <div className={`Section ${isActivated[16] ? 'Activated' : ''}`}>
                                <h3>Automatic Features</h3>
                                <p>Include continuous data protection for selected file/folders, flexible backup schedule daily and weekly, automatic restart after missed backup job, flexible retention policy, and filter files by extension.</p>
                            </div>
                            <div className={`Section ${isActivated[17] ? 'Activated' : ''}`}>
                                <h3>Auto-Backups</h3>
                                <p>Inluding emails, documents, desktop files, customer databases, other important files.</p>
                            </div>
                            <div className={`Section ${isActivated[18] ? 'Activated' : ''}`}>
                                <h3>Optimized & Secure Off-Site Protection</h3>
                                <ol>
                                    <li>- In file block level incremental/differential backup.</li>
                                    <li>- Backup protected by login name and password.</li>
                                    <li>- Top of the line security encryption.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ServiceWrapper'>
                <div className='InnerWrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 55.88">
                        <polygon fill="#d13939" points="0 0 42.04 27.97 .09 55.88 0 0"/>
                    </svg>
                    <h2>Hosted Services</h2>
                    <h4>Join the crowd in the cloud.</h4>
                    <div className='ColumnWrapper'>
                        <div className='Column'>
                            <div className={`Section ${isActivated[19] ? 'Activated' : ''}`}>
                                <h3>Security</h3>
                                <p>How will you go about securing your network from the threats that are entering your company on a daily basis? Vital IT offers a full assortment of software and services solutions to protect your network.</p>
                            </div>
                            <div className={`Section ${isActivated[20] ? 'Activated' : ''}`}>
                                <h3>Anti-Virus</h3>
                                <p>Real time monitoring and protection against known and unknown malware threats that leverages a number of proprietary malware detection methods including dynamic translation, heuristics, behavioral analysis and traditional-signature-based methods.</p>
                            </div>
                            <div className={`Section ${isActivated[21] ? 'Activated' : ''}`}>
                                <h3>Email Encryption</h3>
                                <p>RBTG provides a super-secure, simple-to-use encryption service. One click ensures your message remains encrypted all the way to the recipient. Keep your business compliant and your email safe with our encryption service.</p>
                            </div>
                        </div>
                        <div className='Column'>
                            <div className={`Section ${isActivated[22] ? 'Activated' : ''}`}>
                                <h3>Spam & Virus Protection</h3>
                                <p>Keep your email free of spam and viruses. Our software keeps 99 percent of unwanted messages from ever reaching your inbox. No expensive equipment, no cancellation fee, just an affordable monthly fee solution.</p>
                            </div>
                            <div className={`Section ${isActivated[23] ? 'Activated' : ''}`}>
                                <h3>Web-Protection</h3>
                                <p>Malicious web-content can expose your company to higher costs, lower productivity, and legal issues. We provide protection for your network from web-based malware and viruses by blocking sites known to have malicious content. Additionally, our software allows you to set your own policies to determine what other types of sites are prohibited and which are permitted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </>
}

/**
 * This is to hydrate our file so our server can render the HTML content first and send it to the client.
 * Making sure the window is present, becuase if we attempt to run this file in a Node environment, it will crash.
 */
if(typeof window !== 'undefined') {
    hydrateRoot(document.getElementById('root') as HTMLDivElement, <Services></Services>)
}

export default Services;