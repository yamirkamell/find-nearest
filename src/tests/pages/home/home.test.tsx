import { fireEvent, render, screen } from '@testing-library/react';
import { exampleRows } from './mockData';
import CitiesComponent from '../../../pages/home/components/citiesComponent';

describe('Test suite for Table component', () => {

	it(`Verify that 10 items are displayed`, async () => {
        const limit = 10;
		render(
			<CitiesComponent
                initialCities={exampleRows}
                hasMore={true}
                searchValue={''}
                handleSelectCity={() => {}}
			/>
		);

		exampleRows.slice(0, limit).forEach((row: any, index) => {
				expect(screen.getByText(row.name)).toBeInTheDocument();
		});
	});
	

	it(`Verify that 50 items are displayed`, async () => {
		const limit = 50;
		render(
			<CitiesComponent
                initialCities={exampleRows}
                hasMore={true}
                searchValue={''}
                handleSelectCity={() => {}}
			/>
		);

		exampleRows.slice(0, limit).forEach((row: any, index) => {
            expect(screen.getByText(row.name)).toBeInTheDocument();
        });
	});

	it(`Verify the event on each row with pagination of 10`, async () => {
		const limit = 10;
		const handleOnRowClickBefore = jest.fn(() => {});

		render(
			<CitiesComponent
                initialCities={exampleRows}
                hasMore={true}
                searchValue={''}
                handleSelectCity={handleOnRowClickBefore}
			/>
		);

		exampleRows.slice(0, limit).forEach((item) => {
			fireEvent.click(screen.getByText(item.name));
		});

		expect(handleOnRowClickBefore).toBeCalledTimes(limit);
	});

});