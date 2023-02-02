import React, { FunctionComponent, useRef, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Header from './parts/Header';
import Footer from './parts/Footer';

type FormData = {
    Name: string,
    Email: string,
    Company: string,
    Phone: string,
    Message: string
}

const Contact:FunctionComponent = () => {
    const errorMessage = useRef<HTMLParagraphElement>(null);

    const [formState, setFormState] = useState<FormData>({
        Name: '',
        Email: '',
        Company: '',
        Phone: '',
        Message: ''
    });

    async function submit() {
        if(!errorMessage.current) return;
        errorMessage.current!.innerHTML = '';

        Object.keys(formState).forEach(formInputName => {
            if(formState[formInputName as keyof FormData].length == 0) {
                errorMessage.current!.innerHTML = `You must fill out the field "${formInputName}" before submitting.`;
                return;
            }
        });

        errorMessage.current!.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>'

        const response: {
            success: boolean,
            message: string
        } = await (await fetch('/contact', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "method": 'POST',
            "body": JSON.stringify(formState)
        })).json();

        if(response.success) {
            errorMessage.current!.innerHTML = `Success! Check your E-mail for a confirmation.`;
        } else {
            errorMessage.current!.innerHTML = response.message;
        }
    }

    return <>
        <Header></Header>
        <main>
            <svg className='BigTriangle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.41 582.44">
                <polygon fill="#e34f50" points="515.41 582.44 0 0 0 582.44 515.41 582.44"/>
                <polygon fill="#d13939" points="367.06 582.44 0 167.64 0 582.44 367.06 582.44"/>
            </svg>
            <div className='FormWrapper'>
                <svg className='Triangles' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 556.18">
                    <polygon fill="#d13939" points="0 500.3 42.04 528.27 .09 556.18 0 500.3"/>
                    <polygon fill="#d13939" points="0 135.93 42.04 163.9 .09 191.81 0 135.93"/>
                    <polygon fill="#d13939" points="0 0 42.04 27.97 .09 55.88 0 0"/>
                    <polygon fill="#e7e8ed" points="42.04 203.2 0 231.17 41.94 259.08 42.04 203.2"/>
                    <polygon fill="#e7e8ed" points="42.04 67.27 0 95.24 41.94 123.15 42.04 67.27"/>
                </svg>
                <div className='Title'>
                    <h1>CONTACT US</h1>
                    <a href="tel:6077721888"><h2>(607) 772-1888</h2></a>
                </div>
                <h3 className='SubTitle'>We begin with a free network assessment, and follow up with a pricing plan that best suits you.</h3>
                <div className='InputWrapper'>
                    <p>Name:</p>
                    <input type="text" onInput={e => {
                        setFormState({...formState,
                            Name: (e.target as HTMLInputElement).value
                        })
                    }}></input>
                </div>
                <div className='InputWrapper'>
                    <p>Email:</p>
                    <input type="email" onInput={e => {
                        setFormState({...formState,
                            Email: (e.target as HTMLInputElement).value
                        })
                    }}></input>
                </div>
                <div className='InputWrapper'>
                    <p>Company:</p>
                    <input type="text" onInput={e => {
                        setFormState({...formState,
                            Company: (e.target as HTMLInputElement).value
                        })
                    }}></input>
                </div>
                <div className='InputWrapper'>
                    <p>Phone:</p>
                    <input type="phone" onInput={e => {
                        setFormState({...formState,
                            Phone: (e.target as HTMLInputElement).value
                        })
                    }}></input>
                </div>
                <div className='InputWrapper'>
                    <p>Message:</p>
                    <textarea  onInput={e => {
                        setFormState({...formState,
                            Message: (e.target as HTMLInputElement).value
                        })
                    }}></textarea>
                </div>
                <p ref={errorMessage} className='ErrorMessage'></p>
                <div className='SubmitButton' onClick={submit}>SUBMIT</div>
            </div>
        </main>
        <Footer></Footer>
    </>
}

/**
 * This is to hydrate our file so our server can render the HTML content first and send it to the client.
 * Making sure the window is present, becuase if we attempt to run this file in a Node environment without a window (which we will), it will crash.
 */
if(typeof window !== 'undefined') {
    hydrateRoot(document.getElementById('root') as HTMLDivElement, <Contact></Contact>)
}

export default Contact;