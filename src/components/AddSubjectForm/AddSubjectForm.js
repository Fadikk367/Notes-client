import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { FormWrapper, Form, FormControls } from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const AddSubjectForm = React.forwardRef((props, ref) => {
  const { handleSubmit, control } = useForm();
  const { onAddSubject } = props;

  const handleSubmitForm = handleSubmit(async values => {
    onAddSubject(values)
  });

  return (
    <FormWrapper ref={ref}>
      <Form onSubmit={handleSubmitForm}>
        <Typography variant="h5">Add new subject:</Typography>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField 
              label="Name" 
              fullWidth 
              variant="outlined"
              {...field}
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{ required: "Description is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField 
              label="Description" 
              fullWidth 
              variant="outlined"
              multiline
              rows={4}
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

export default AddSubjectForm;
