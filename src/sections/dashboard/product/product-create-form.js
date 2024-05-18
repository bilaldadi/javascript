import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { FileDropzone } from '../../../components/file-dropzone';
import { QuillEditor } from '../../../components/quill-editor';
import { paths } from '../../../paths';


const initialValues = {
  name: '',
  price: '',
  quantity: '',
  productsDescriptionId: '',
  partId: '',
  categoryId: '',
  discountId: '',
  submit: null
};

const validationSchema = Yup.object({
  name: Yup.string().max(255).required(),
  price: Yup.number().min(0).required(),
  quantity: Yup.number().min(0).required(),
  productsDescriptionId: Yup.number().min(0).required(),
  partId: Yup.number().min(0).required(),
  categoryId: Yup.number().min(0).required(),
  discountId: Yup.number().min(0).required(),
});

export const ProductCreateForm = (props) => {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        const response = await fetch('http://localhost:5257/api/Products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        toast.success('Product created');
        router.push(paths.dashboard.products.index);
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleFilesDrop = useCallback((newFiles) => {
    setFiles((prevFiles) => {
      return [...prevFiles, ...newFiles];
    });
  }, []);

  const handleFileRemove = useCallback((file) => {
    setFiles((prevFiles) => {
      return prevFiles.filter((_file) => _file.path !== file.path);
    });
  }, []);

  const handleFilesRemoveAll = useCallback(() => {
    setFiles([]);
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      {...props}>
      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={4}
              >
                <Typography variant="h6">
                  Basic details
                </Typography>
              </Grid>
              <Grid
                xs={12}
                md={8}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Product Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />

                    <TextField
                    error={!!(formik.touched.price && formik.errors.price)}
                    fullWidth
                    helperText={formik.touched.price && formik.errors.price}
                    label="price"
                    name="price"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                  <TextField
                    error={!!(formik.touched.quantity && formik.errors.quantity)}
                    fullWidth
                    helperText={formik.touched.quantity && formik.errors.quantity}
                    label="quantity"
                    name="quantity"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.quantity}
                  />
                  <TextField
                    error={!!(formik.touched.productsDescriptionId && formik.errors.productsDescriptionId)}
                    fullWidth
                    helperText={formik.touched.productsDescriptionId && formik.errors.productsDescriptionId}
                    label="productsDescriptionId"
                    name="productsDescriptionId"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.productsDescriptionId}
                  />
                  <TextField
                    error={!!(formik.touched.partId && formik.errors.partId)}
                    fullWidth
                    helperText={formik.touched.partId && formik.errors.partId}
                    label="partId"
                    name="partId"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.partId}
                  />
                   <TextField
                    error={!!(formik.touched.categoryId && formik.errors.categoryId)}
                    fullWidth
                    helperText={formik.touched.categoryId && formik.errors.categoryId}
                    label="categoryId"
                    name="categoryId"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.categoryId}
                  />
                   <TextField
                    error={!!(formik.touched.discountId && formik.errors.discountId)}
                    fullWidth
                    helperText={formik.touched.discountId && formik.errors.discountId}
                    label="discountId"
                    name="discountId"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.discountId}
                  />
                 
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={1}
        >
          <Button color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
