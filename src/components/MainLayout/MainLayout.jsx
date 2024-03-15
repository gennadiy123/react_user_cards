import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, changeCard } from "../../redux/cardSlice";
import { addUserCard } from "../../redux/middleware";
import {
  Wrapper,
  Card,
  AddCard,
  CardButton,
  DeleteCardButton,
  Text,
} from "./styledMainLayout";

export const MainLayout = () => {
  const [show, setShow] = useState(false);
  const [card, setCard] = useState({ id: null, description: "" });
  const [description, setDescription] = useState("");
  const cards = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleClose = () => {
    setDescription("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleAddCard = () => {
    if (!description.trim()) {
      alert("Input shouldn`t be empty");
      return;
    }

    if (card.id) {
      dispatch(
        changeCard({
          id: card.id,
          description: description,
        })
      );
      setShow(false);
      setCard({ id: null, description: "" });
    } else {
      dispatch(addUserCard({ description: description, id: Date.now() }));
      setShow(false);
      setDescription("");
    }
  };

  const handleRemoveCard = (id) => {
    dispatch(removeCard(id));
  };

  const handleEditCard = (id, description) => {
    setCard({
      id: id,
      description: description,
    });
    setDescription(description);
    setShow(true);
  };

  const handleCreateDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Wrapper>
      {cards.map((el) => (
        <Card key={el.id}>
          <div>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
          <div>
            <CardButton onClick={() => handleEditCard(el.id, el.description)}>
              <Text>Edit</Text>
            </CardButton>
            <DeleteCardButton onClick={() => handleRemoveCard(el.id)}>
              <Text>Delete</Text>
            </DeleteCardButton>
          </div>
        </Card>
      ))}
      <AddCard onClick={handleShow}>
        <h2>Create card</h2>
      </AddCard>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Description:
              <input
                type="text"
                name="name"
                onChange={handleCreateDescription}
                value={description}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCard}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};
