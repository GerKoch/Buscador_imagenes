import { Formik, Form, Field } from "formik";
import { useState } from "react";
import CardSeeker from "../components/CardSeeker";
import '../components/styles.css';

const Seeker = () => {

    const [photos, setPhotos] = useState([]);
    
    return (
        <div>
            <header>
                <p>Buscador de imagenes de Unsplash</p>
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={async values => {
                        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${values.search}`, {
                            headers: {
                                'Authorization': 'Client-ID 4KIMb7I8hmwncR8Ia-saBMJ3i_Mvs5uSxchpWupBxko'
                            }
                        })
                        const data = await response.json()
                        setPhotos(data.results)
                    }}
                >
                    <Form>
                        <Field name='search' placeholder='Ingresa el texto de lo que quieres buscar' />
                    </Form>
                </Formik>
            </header>
            <div className="container">
                <div className="center">
                    {
                        photos.map(photo =>
                            <CardSeeker
                                key={photo.id}
                                id={photo.id}
                                image={photo.urls.regular}
                                link={photo.links.html}
                                description={photo.description}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Seeker;