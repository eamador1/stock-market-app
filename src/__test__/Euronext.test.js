import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import Euronext from '../components/Euronext';
import Detail from '../components/CompanyDetail';

describe('Renders without crashing', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Euronext />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Euronext should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/euronext" element={<Euronext />} />
            <Route path="/euronext/:content" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
