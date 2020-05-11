import React, {Component} from 'react';
import {StyleSheet, Image, View, TouchableOpacity,Text} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Seçenekler',
    takePhotoButtonTitle: 'Fotoğraf Çek',
    chooseFromLibraryButtonTitle:'Galeriden Resim Seç',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    allowsEditing: true
};

export default class PhotoSelect extends Component<Props> {

    state = {
        avatarSource: null,
    };

    onSelectPicture = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                this.setState({
                    avatarSource: source,
                });

                this.uploadPhoto(response);
            }
        });
    };

    uploadPhoto = async response => {
        const data = new FormData();
        data.append('fileData', {
            uri: response.uri,
            type: response.type,
            name: response.fileName
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.state.avatarSource} style={{width: 400, height: 500}}/>

                <View style={styles.bottomController}>
                    <TouchableOpacity
                        onPress={this.onSelectPicture}
                        style={styles.selectButton}
                    >
                        <Text style={styles.selectText}>Resim Seç</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    bottomController: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectButton: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 6,
        padding: 15,
        margin: 15,
    },
    selectText: {
        color: '#000',
        textAlign: 'center',
        fontSize:18
    }

});