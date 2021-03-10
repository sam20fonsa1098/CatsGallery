import React, { useEffect, useCallback, useState, useMemo } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CLIENT_ID } from '@env';
import { Alert, Modal, View, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  CatContainer,
  List,
  modalStyles,
  Title,
  SubTitle,
  IconsContainer,
  CustomIcom,
} from './styles';
import { Cats, UriCat, FormData } from './interfaces';
import { formatImageValidation } from '../../utils/formatImageValidation';
import Loading from '../../components/Loading';
import Image from '../../components/Image';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import { vh, vw } from '../../utils/dimensions';
import { schema } from './schemas';

const Galery: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cats, setCats] = useState<Array<Cats>>([]);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isConfigVisible, setIsConfigVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<UriCat | undefined>(
    undefined,
  );
  const [rows, setRows] = useState(2);
  const { handleSubmit, register, errors, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleOnChangeIsConfigVisible = useCallback(() => {
    setIsConfigVisible((prevState) => !prevState);
  }, []);

  const handleOnChangeisImageVisible = useCallback(() => {
    setIsImageVisible((prevState) => !prevState);
  }, []);

  const handleOnChangeRows = useCallback(
    (data: FormData) => {
      setRows(data.columns);
      handleOnChangeIsConfigVisible();
    },
    [handleOnChangeIsConfigVisible],
  );

  const handleOnClickImage = useCallback(
    (cat: UriCat) => {
      setSelectedImage(cat);
      handleOnChangeisImageVisible();
    },
    [handleOnChangeisImageVisible],
  );

  const handleOnLoadImageCats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<{ data: Array<Cats> }>('search/?q=cats', {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      });
      setCats(response.data.data);
      setLoading(false);
    } catch (_) {
      Alert.alert(
        'Não foi possível carregar as imagens',
        'Por favor, tente novamente',
      );
      setLoading(false);
    }
  }, []);

  const imageWidth = useMemo(() => {
    return (40 * vh) / rows;
  }, [rows]);

  const imageCatsUri = useMemo(() => {
    const uris: Array<UriCat> = [];
    cats
      .filter((cat) => cat.images !== undefined)
      .forEach((cat) => {
        cat.images.forEach((image) => {
          if (image.link && formatImageValidation(image.link)) {
            uris.push({
              uri: image.link,
              id: image.id,
              downs: cat.downs,
              ups: cat.ups,
              title: cat.title,
            });
          }
        });
      });
    return uris;
  }, [cats]);

  useEffect(() => {
    handleOnLoadImageCats();
  }, [handleOnLoadImageCats]);

  useEffect(() => {
    register('columns');
  }, [register]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header onConfigPress={handleOnChangeIsConfigVisible} />
      <Container>
        <List
          numColumns={rows}
          key={rows}
          data={imageCatsUri}
          keyExtractor={(item) => item.id}
          renderItem={({ item: imageCat }) => {
            return (
              <CatContainer
                onPress={() => {
                  handleOnClickImage(imageCat);
                }}
              >
                <Image
                  image_url={imageCat.uri}
                  style={{ width: imageWidth, height: imageWidth }}
                />
              </CatContainer>
            );
          }}
        />
        <Modal
          animationType="slide"
          transparent
          visible={isImageVisible}
          onRequestClose={handleOnChangeisImageVisible}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Title>{selectedImage?.title as string}</Title>
              <Image image_url={selectedImage?.uri as string} />
              <IconsContainer>
                <CustomIcom name="thumbs-up" size={2 * vh} color="blue" />
                <SubTitle>{selectedImage?.ups}</SubTitle>
                <CustomIcom
                  name="thumbs-down"
                  size={2 * vh}
                  color="red"
                  style={{ marginLeft: 4 * vw }}
                />
                <SubTitle>{selectedImage?.downs}</SubTitle>
              </IconsContainer>
              <Pressable
                style={{ width: '100%' }}
                onPress={handleOnChangeisImageVisible}
              >
                <Button>Voltar</Button>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent
          visible={isConfigVisible}
          onRequestClose={handleOnChangeIsConfigVisible}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Input
                messageError={errors.columns?.message}
                onChangeText={(text) => {
                  setValue('columns', text);
                }}
                icon="columns"
                autoCorrect={false}
                placeholder="Digite o número de colunas"
                returnKeyType="send"
                keyboardType="number-pad"
                onSubmitEditing={handleSubmit(handleOnChangeRows)}
              />
              <Pressable
                style={{ width: '100%' }}
                onPress={handleSubmit(handleOnChangeRows)}
              >
                <Button>Confirmar</Button>
              </Pressable>
              <Pressable
                style={{ width: '100%' }}
                onPress={handleOnChangeIsConfigVisible}
              >
                <Button>Voltar</Button>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Container>
    </>
  );
};

export default Galery;
