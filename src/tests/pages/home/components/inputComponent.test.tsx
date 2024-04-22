import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponent from "../../../../pages/home/components/inputComponent";

describe('Test suite for Input component', () => {
	it('When giving it a placeholder it should appear in the input', async () => {
		render(
			<InputComponent
				ariaLabel="Input"
				placeholder="Nombre"
				value=""
			/>
		);

		const badge = screen.getByPlaceholderText('Nombre');
		expect(badge).toBeInTheDocument();
	});

	test('Input has correct value', () => {
		render(
			<InputComponent
                ariaLabel="Input"
                placeholder="Nombre"
				value="Test 1"
			/>
		);
		const input = screen.getByLabelText('Input') as HTMLInputElement;
		expect(input.value).toBe('Test 1');
	});

	it('should call onChange when input value changes', async () => {
		const handleOnChange = jest.fn();
		render(
			<InputComponent
                ariaLabel="Input"
                placeholder="Nombre"
				handleChange={handleOnChange}
			/>
		);
		const input = screen.getByLabelText('Input');
		userEvent.type(input, 'Nuevo valor');
		expect(input).toHaveValue('Nuevo valor');
	});
});
