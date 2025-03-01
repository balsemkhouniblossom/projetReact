import { Button, Container, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addEvent } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { eventSchema } from '../Components/eventSchema'; // Assurez-vous que le chemin est correct
import { zodResolver } from '@hookform/resolvers/zod'; // Ajoutez cette ligne

function AddEvent() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(eventSchema), // Utilisation de Zod pour la validation
  });
    const [message, setMessage] = useState('');

    const submitAnEvent = async (event) => {
        const { name, img, price, nbTickets, nbParticipants } = event;
        const formData = {
            name,
            img: img[0].name, // Utilisez le nom du fichier
            price: parseFloat(price),
            nbTickets: parseInt(nbTickets),
            nbParticipants: parseInt(nbParticipants) || 0, // Ajouter nbParticipants
            like: false
        };

        try {
            const res = await addEvent(formData);
            if (res.status === 201) {
                setMessage('Event added successfully!');
                setTimeout(() => {
                    navigate("/events");
                }, 2000);
            }
        } catch (error) {
            setMessage('Error adding event: ' + error.message);
        }
    };

    return (
        <Container className='mt-5'>
            <h1>Add Event</h1>
            {message && <Alert variant={message.includes('Error') ? 'danger' : 'success'}>{message}</Alert>}
            <Form onSubmit={handleSubmit(submitAnEvent)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register("name", { required: true })} type="text" placeholder="Enter name" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control {...register("img", { required: true })} type="file" />
                    {errors.img && <span className="text-danger">Image is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNbTickets">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control {...register("nbTickets", { required: true, min: 1 })} type="number" placeholder="Enter number of tickets" />
                    {errors.nbTickets && <span className="text-danger">Number of tickets is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control {...register("price", { required: true, min: 1 })} type="number" placeholder="Enter price" />
                    {errors.price && <span className="text-danger">Price is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNbParticipants">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control {...register("nbParticipants")} type="number" placeholder="Enter number of participants" defaultValue={0} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default AddEvent;