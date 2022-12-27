import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import fs from 'fs'
import path from 'path';
import { ChooseFile } from './ChooseFile';

// Check for JSON file inside the zip
beforeEach(() => jest.clearAllMocks());
jest.setTimeout(180000);


describe('File Selection || Zip file with no JSON inside', () => {
  it('select empty .zip file', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<ChooseFile />);
    const inputEl = screen.getByTestId('select-option');
    let output = fs.readFileSync(path.join(__dirname, "../_tests_", "withoutJSON.zip"));
    const file = new File([output], "test.zip", { type: 'application/zip' });
    Object.defineProperty(inputEl, 'file', {
      value: file
    });
    const files = {
      target: {
        files: [file],
      },
    }
    fireEvent.change(inputEl, files)

    expect(screen.queryByText('JSON not found')).not.toBeInTheDocument();
    expect(screen.queryByText('Videos not found')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid File!')).not.toBeInTheDocument();
    expect(alertMock).toHaveBeenCalledTimes(0);
  });
});

describe('File Selection || Zip file with metadata and video', () => {
  it('Select valid zip file', async () => {
    global.URL.createObjectURL = jest.fn(() => 'details');
    const { getByTestId } = render(<ChooseFile />);
    let inputEl = getByTestId('select-option');

    let output = fs.readFileSync(path.join(__dirname, "../_tests_", "withJSONAndVideo.zip"));
    const file = new File([output], "test.zip", { type: 'application/zip' });
    Object.defineProperty(inputEl, 'file', {
      value: file
    });
    const files = {
      target: {
        files: [file],
      },
    }
    fireEvent.change(inputEl, files)
    expect(await screen.findByLabelText("message", {}, { timeout: 6000 })).toBeInTheDocument();
    expect(screen.queryByText('JSON not found')).not.toBeInTheDocument();
    expect(screen.queryByText('Videos not found')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid File!')).not.toBeInTheDocument();
  });
});

describe('File Selection || Zip file with without video', () => {
  it('Select zip file without video', async () => {
    global.URL.createObjectURL = jest.fn(() => 'details');
    const { getByTestId } = render(<ChooseFile />);
    let inputEl = getByTestId('select-option');

    let output = fs.readFileSync(path.join(__dirname, "../_tests_", "withoutVideo.zip"));
    const file = new File([output], "test.zip", { type: 'application/zip' });
    Object.defineProperty(inputEl, 'file', {
      value: file
    });
    const files = {
      target: {
        files: [file],
      },
    }
    fireEvent.change(inputEl, files)
    expect(await screen.findByLabelText("message", {}, { timeout: 6000 })).toBeInTheDocument();
    expect(screen.queryByText('JSON not found')).not.toBeInTheDocument();
    expect(screen.queryByText('Videos not found')).toBeInTheDocument();
    expect(screen.queryByText('Invalid File!')).not.toBeInTheDocument();
  });
});