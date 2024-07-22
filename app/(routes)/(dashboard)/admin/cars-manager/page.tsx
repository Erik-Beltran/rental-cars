import { ButtonAddCar } from "./components/ButtonAddCar";

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2>Magane your cars</h2>
        <ButtonAddCar />
      </div>
    </div>
  );
}
