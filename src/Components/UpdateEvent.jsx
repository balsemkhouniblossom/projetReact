import { Button, Container, Form, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getallEvents, editEvent } from "../services/api"; // Assurez-vous d'importer ces fonctions
import { eventSchema } from '../Components/eventSchema'; // Assurez-vous que le chemin est correct
import { zodResolver } from '@hookform/resolvers/zod'; // Ajoutez cette ligne

function UpdateEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(eventSchema),
    });

    const [message, setMessage] = useState('');
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await getallEvents(id);
                setEventData(response.data);
                setValue("name", response.data.name);
                setValue("img", response.data.img);
                setValue("price", response.data.price);
                setValue("nbTickets", response.data.nbTickets);
                setValue("nbParticipants", response.data.nbParticipants);
            } catch (error) {
                setMessage('Error fetching event: ' + error.message);
            }
        };

        fetchEvent();
    }, [id, setValue]);

    const submitUpdateEvent = async (data) => {
        const updatedData = {
            name: data.name,
            img: data.img[0].name, // Utilisez le nom du fichier
            price: parseFloat(data.price),
            nbTickets: parseInt(data.nbTickets),
            nbParticipants: parseInt(data.nbParticipants)
        };

        try {
            const res = await editEvent(id, updatedData);
            if (res.status === 200) {
                setMessage('Event updated successfully!');
                setTimeout(() => {
                    navigate("/events");
                }, 2000);
            }
        } catch (error) {
            setMessage('Error updating event: ' + error.message);
        }
    };

    if (!eventData) {
        return <div>Loading...</div>; // Message de chargement
    }

    return (
        <Container className='mt-5'>
            <h1>Update Event</h1>
            {message && <Alert variant={message.includes('Error') ? 'danger' : 'success'}>{message}</Alert>}
            <Form onSubmit={handleSubmit(submitUpdateEvent)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register("name", { required: true })} type="text" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control {...register("img", { required: true })} type="file" />
                    {errors.img && <span className="text-danger">Image is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNbTickets">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control {...register("nbTickets", { required: true, min: 1 })} type="number" />
                    {errors.nbTickets && <span className="text-danger">Number of tickets is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control {...register("price", { required: true, min: 1 })} type="number" />
                    {errors.price && <span className="text-danger">Price is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNbParticipants">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control {...register("nbParticipants")} type="number" defaultValue={0} />
                </Form.Group>

                <Button variant="primary" type="submit">Update</Button>
            </Form>
        </Container>
    );
}

export default UpdateEvent;