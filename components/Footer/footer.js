import styles from "./footer.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Foooter() {
    return (
        <div className={styles.mainfooter}>
            <Container>
            <Row>
                    {/* Column 1 */}
                    <Col>
                        <h4>Innovation Auto Hail Repair</h4>
                        <ul className="list-unstyled">
                            <li>3301 S Texas Ave</li>
                            <li>Bryan, TX</li>
                        </ul>
                    </Col>
                    {/* Column 2 */}
                    <Col>
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>Paintless Dent Repair</li>
                            <li>Rental Assistance</li>
                            <li>Deductible Assistance</li>
                        </ul>
                    </Col>
                    {/* Column 3 */}
                    <Col>
                        <h4>Contact Info</h4>
                        <ul className="list-unstyled">
                            <li>(970) 539-8184 - Manager</li>
                            <li>innovation.pdr@gmail.com</li>
                            <li>Si Habla Español</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <p>
                            %copy;{new.Date().getFullYear()} Innovation Auto Hail Repair | All Rights reveserved | Employee Login 
                        </p>
                    </Col>
                </Row>        
            </Container>
        </div>
    )
}