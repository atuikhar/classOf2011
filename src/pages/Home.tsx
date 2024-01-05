import { useCallback, useEffect, useRef } from 'react';

import { Box } from '@mui/material';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import { photos } from '@/common/utils/appConstants';
import Page from '@/components/Page';

export default function Home() {
  const lightGallery = useRef<any>(null);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(
    () =>
      photos?.map((item) => (
        <a
          href={item.src}
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
        >
          <img className="img-responsive" src={item.thumb} alt="ok" />
        </a>
      )),
    []
  );

  useEffect(() => {
    lightGallery.current.refresh();
  }, []);

  return (
    <Page title={'Gallery'}>
      <LightGallery plugins={[lgVideo, lgZoom]} onInit={onInit}>
        {getItems()}
      </LightGallery>
    </Page>
  );
}
