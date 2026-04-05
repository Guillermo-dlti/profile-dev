import "./InterestedForm.css";
import React, { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi";


export default function InterestedForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();
        const data = await fetch('api/server', {
            method: "POST",
            headers: {},
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            }),
        });
        const res = await data.json();
        console.log(res);
    };


    return (
        <section className="interested-form-section">
            <div className="interested-form-card">


                <div className="interested-form">
                    <div className="form-left">
                        <h2 className="form-title">Initiate Project.</h2>

                        <p className="form-description">
                            Have a complex engineering challenge or a vision that
                            needs architectural precision? Let's connect and build
                            something extraordinary.
                        </p>

                        <div className="forms-info">
                            <div className="form-point">
                                <div className="form-icon"><FiMail /></div>
                                <div className="form-text">
                                    <h3>EMAIL</h3>
                                    <p>guillermo.delatorreisunza@gmail.com</p>
                                </div>
                            </div>

                            <div className="form-point">
                                <div className="form-icon"><FiMapPin /></div>
                                <div className="form-text">
                                    <h3>BASE</h3>
                                    <p>Open To Relocate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-right">

                        <form onSubmit={handleSendEmail}>
                            <div className="home-form-row">
                                <div className="home-input-group">
                                    <label>IDENTITY</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <div className="home-input-group">
                                    <label>COMMUNICATION</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Emial Address"
                                        value={form.email}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>

                            <div className="home-input-group home-input-group-full">
                                <label>THE MISSION</label>
                                <textarea
                                    name="message"
                                    placeholder="Describe your project goals..."
                                    value={form.message}
                                    onChange={handleOnChange}
                                />
                            </div>

                            <button type="submit" className="home-send-btn">
                                Send Transmission <HiOutlinePaperAirplane className="send-icon" />
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
}