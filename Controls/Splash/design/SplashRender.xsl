<?xml version='1.0'?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>


  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>

  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'gxui.Splash'">
        <xsl:call-template name="RenderSplash"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- GxChart design render -->
  <xsl:template name="RenderSplash">
    <div atomicselection="true">
		<xsl:attribute name="style">
			<xsl:text>border:1px solid black;background-color:#C0C0C0;font-family:Arial Narrow;font-size:10pt;color:black;width:110px;padding:2px;letter-spacing:0.9px</xsl:text>
		</xsl:attribute>
		<img alt="gxui.Splash">
			<xsl:attribute name="src">
				<xsl:value-of select='gxca:GetMyPath()'/>
				<xsl:text>\Splash\design\splash.png</xsl:text>
			</xsl:attribute>
			<xsl:attribute name="style">
				<xsl:text>margin-right:4px;float:left;</xsl:text>
			</xsl:attribute>
		</img>gxui.Splash
	</div>
  </xsl:template>

  <!-- Helpers Templates -->
  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
    
  </xsl:template>
  
  
</xsl:stylesheet>