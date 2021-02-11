import React from "react"
import { Button } from "../components/Button/Button"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"
import { Clients } from "../components/Clients/Clients"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="nowy opis" />
    <SiteTitle>O NAS</SiteTitle>
    <div style={{ maxWidth: "1280px" }} className="mx-auto">
      <div className="px-3 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          corporis, incidunt, nam totam qui optio voluptatibus maxime ab
          expedita libero hic assumenda delectus sequi! Tenetur repellat nihil
          dicta nesciunt ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          corporis, incidunt, nam totam qui optio voluptatibus maxime ab
          expedita libero hic assumenda delectus sequi! Tenetur repellat nihil
          dicta nesciunt ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          corporis, incidunt, nam totam qui optio voluptatibus maxime ab
          expedita libero hic assumenda delectus sequi! Tenetur repellat nihil
          dicta nesciunt ipsa!
        </p>
      </div>
      <h2 className="text-center uppercase font-bold text-white p-1 text-md my-5 bg-primary mx-auto">
        Zobacz co mówią o nas nasi kliencji
      </h2>
      <Clients />
      <p className="text-center uppercase font-bold text-black p-1 text-md my-5  mx-auto">
        tu nas znajdziesz
      </p>
      <GoogleMap className="w-full mx-auto h-96 my-5"></GoogleMap>
    </div>
  </Layout>
)

export default AboutPage
