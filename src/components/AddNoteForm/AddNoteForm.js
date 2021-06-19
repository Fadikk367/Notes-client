import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { FormWrapper, Form, FormControls } from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const AddNoteForm = React.forwardRef((props, ref) => {
  const { handleSubmit, control } = useForm();
  const { subjectId, onAddNote } = props;

  const handleSubmitForm = handleSubmit(values => {
    onAddNote({ ...values, subjectId });
  });

  return (
    <FormWrapper ref={ref}>
      <Form onSubmit={handleSubmitForm}>
        <Typography variant="h5">Add new note or definition:</Typography>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{ required: "Title is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField 
              label="Titile" 
              fullWidth 
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          defaultValue=""
          rules={{ required: "Content is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField 
              label="Content" 
              fullWidth 
              variant="outlined"
              multiline
              rows={12}
              {...field}
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
        <FormControls>
          <Button type="submit" variant="contained" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControls>
      </Form>
    </FormWrapper>
  );
})

export default AddNoteForm;
