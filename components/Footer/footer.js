import styles from "./footer.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'

export default function Foooter() {
    return (
        <div className={styles.mainfooter}>
            <Container>
            <Row className={styles.bizInfo}>
                    {/* Column 1 */}
                    <Col lg={4} sm={12}>
                        <h4 className={styles.heading}>Innovation Auto Hail Repair</h4>
                        <div>
                        <ul>
                            <li>3301 S Texas Ave</li>
                            <li>Bryan, TX 77802</li>
                            <li>Hours: 6AM-8PM M-F</li>
                        </ul>
                        </div>
                    </Col>
                    {/* Column 2 */}
                    <Col lg={4} sm={6}>
                        <h4 className={styles.heading}>Services</h4>
                        <ul>
                            <li>Paintless Dent Repair</li>
                            <li>Rental Assistance</li>
                            <li>Deductible Assistance</li>
                        </ul>
                    </Col>
                    {/* Column 3 */}
                    <Col lg={4} sm={6}>
                        <h4 className={styles.heading}>Contact Info</h4>
                        <ul>
                            <li>(970) 539-8184 - Manager</li>
                            <li><a href="mailto:innovation.pdr@gmail.com">innovation.pdr@gmail.com</a></li>
                            <li>Si Habla Español</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={styles.footer}>
                            &copy;2020 Innovation Auto Hail Repair | All Rights reveserved | <Link href="/employee"><a className={styles.employee}>Employee Login</a></Link> 
                        </p>
                    </Col>
                </Row>        
            </Container>
        </div>
    )
}