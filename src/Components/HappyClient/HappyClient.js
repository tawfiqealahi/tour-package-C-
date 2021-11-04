import React from 'react';
import happyClient from '../../image/happpyClient.jpg';

const HappyClient = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-6">
                    <h1>We are happy to make you happier</h1>
                    <h5>Etiam porta sem malesuada magna mollis euismod. Nullam quis isus eget urna mollis ornare vel eu leo. Fusce dapibus, Aenean e u leo quam. Pellentesque ornare sem lacinia.</h5>
                    <li>Nullam quis risus eget urna mollis ornare vel eu leo.</li>
                    <li>Sed posuere consectetur est at lobortis.</li>
                    <li>Aenean eu leo quam. Pellentesque ornare si.</li>
                    <li>Curabitur blandit tempus porttitor.</li>
                </div>
                <div className="col-md-6">
                    <img src={happyClient} alt="happy client" />
                </div>
            </div>
        </div>
    );
};

export default HappyClient;